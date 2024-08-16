import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import {
  AuthState,
  LoginUser,
  ResetPassword,
  SignupUser,
} from '../../types/types';
import firestore from '@react-native-firebase/firestore';

const initialState: AuthState = {
  user: null,
  status: 'idle',
  error: null,
};

export const signupUser = createAsyncThunk(
  'auth/signup',
  async (data: SignupUser, thunkAPI) => {
    try {
      const usernameSnapshot = await firestore()
        .collection('users')
        .where('username', '==', data.userName)
        .get();

      if (!usernameSnapshot.empty) {
        throw new Error('Username is already taken.');
      }

      const userCredential = await auth().createUserWithEmailAndPassword(
        data.email,
        data.password,
      );

      if (userCredential.user) {
        await userCredential.user.updateProfile({
          displayName: data.userName,
        });

        const updatedUser = auth().currentUser;
        if (!updatedUser || updatedUser.uid !== userCredential.user.uid) {
          throw new Error('Failed to retrieve the updated user.');
        }

        await firestore().collection('users').doc(updatedUser.uid).set({
          username: data.userName,
          email: data.email,
          createdAt: firestore.FieldValue.serverTimestamp(),
        });

        return {
          uid: updatedUser.uid,
          email: updatedUser.email,
          displayName: updatedUser.displayName,
        };
      } else {
        throw new Error('User creation failed.');
      }
    } catch (error) {
      console.error('Signup Error:', error);
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  },
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (data: LoginUser, thunkAPI) => {
    try {
      let email = data.identifier;
      if (!data.identifier.includes('@')) {
        const userSnapshot = await firestore()
          .collection('users')
          .where('username', '==', data.identifier)
          .get();
        if (userSnapshot.empty) {
          throw new Error('No user found with the provided username');
        }
        email = userSnapshot.docs[0].data().email;

        if (!email) {
          throw new Error('User found but email is not available');
        }
      }
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        data.password,
      );
      console.log('userCredential', userCredential);

      return {
        uid: userCredential.user?.uid,
        email: userCredential.user?.email,
        displayName: userCredential.user?.displayName,
      };
    } catch (error) {
      console.error('Login Error:', error);
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  },
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await auth().signOut();
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  },
);
export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email: string, thunkAPI) => {
    try {
      const userSnapshot = await firestore()
        .collection('users')
        .where('email', '==', email)
        .get();

      if (userSnapshot.empty) {
        throw new Error('No user found with the provided email');
      }
      await auth().sendPasswordResetEmail(email);
      return 'Password reset email sent';
    } catch (error) {
      console.error('Forgot Password Error:', error);
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  },
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({oldPassword, newPassword}: ResetPassword, {rejectWithValue}) => {
    try {
      const user = auth().currentUser;
      if (!user) {
        throw new Error('No user is currently signed in.');
      }

      const credential = auth.EmailAuthProvider.credential(
        user.email!,
        oldPassword,
      );

      await user.reauthenticateWithCredential(credential);
      await user.updatePassword(newPassword);
      return 'Password has been updated.';
    } catch (error: any) {
      if (error.code === 'auth/invalid-credential') {
        return rejectWithValue('The old password is incorrect.');
      }
      console.error('Reset Password Error:', error);
      return rejectWithValue((error as Error).message);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearDetails(state) {
      state.user = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signupUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(loginUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(logoutUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(logoutUser.fulfilled, state => {
        state.status = 'idle';
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(forgotPassword.pending, state => {
        state.status = 'loading';
      })
      .addCase(forgotPassword.fulfilled, state => {
        state.status = 'idle';
        state.error = null;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(resetPassword.pending, state => {
        state.status = 'loading';
      })
      .addCase(resetPassword.fulfilled, state => {
        state.status = 'idle';
        state.error = null;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const {clearDetails} = authSlice.actions;
export default authSlice.reducer;
