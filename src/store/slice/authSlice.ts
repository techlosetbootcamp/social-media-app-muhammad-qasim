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
  async (data: SignupUser, {rejectWithValue}) => {
    try {
      const userName = data?.userName
        ?.trim()
        .toLowerCase()
        .replace(/\s+/g, '_');
      const email = data?.email?.trim().toLowerCase();
      const userNameSnapshot = await firestore()
        .collection('users')
        .where('username', '==', userName)
        .get();

      if (!userNameSnapshot.empty) {
        return rejectWithValue('Username is already taken.');
      }
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        data?.password,
      );
      const user = userCredential?.user;
      if (!user) {
        return rejectWithValue('User creation failed.');
      }
      await user?.updateProfile({
        displayName: userName,
      });
      const updatedUser = auth().currentUser;
      if (!updatedUser || updatedUser?.uid !== user?.uid) {
        return rejectWithValue('Failed to retrieve the updated user.');
      }
      await firestore().collection('users').doc(updatedUser?.uid).set({
        username: userName,
        email: email,
        userId: updatedUser.uid,
        name: userName,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
      return 'User created successfully';
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        return rejectWithValue('Email address is already in use.');
      }
      return rejectWithValue('An error occurred during signup.');
    }
  },
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (data: LoginUser, thunkAPI) => {
    try {
      let identifier = data?.identifier?.trim().toLowerCase();
      if (!identifier?.includes('@')) {
        identifier = identifier?.replace(/\s+/g, '_');
      }
      let email = identifier;
      if (!email?.includes('@')) {
        const userSnapshot = await firestore()
          .collection('users')
          .where('username', '==', email)
          .get();
        if (userSnapshot.empty) {
          return thunkAPI.rejectWithValue(
            'No user found with the provided username.',
          );
        }
        email = userSnapshot?.docs[0]?.data()?.email;
        if (!email) {
          return thunkAPI.rejectWithValue('Failed to retrieve the user email.');
        }
      }
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        data.password,
      );
      return {
        uid: userCredential?.user?.uid,
        email: userCredential?.user?.email,
        displayName: userCredential?.user?.displayName,
      };
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        return thunkAPI.rejectWithValue('User not found. Please try again.');
      }
      if (error.code === 'auth/invalid-credential') {
        return thunkAPI.rejectWithValue(
          'Invalid credential. Please try again.',
        );
      }
      if (error.code === 'auth/wrong-password') {
        return thunkAPI.rejectWithValue('Wrong password. Please try again.');
      }
      return thunkAPI.rejectWithValue('An error occurred during login.');
    }
  },
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email: string, thunkAPI) => {
    try {
      const normalizedEmail = email?.trim().toLowerCase();
      const userSnapshot = await firestore()
        .collection('users')
        .where('email', '==', normalizedEmail)
        .get();

      if (userSnapshot.empty) {
        return thunkAPI.rejectWithValue(
          'No user found with the provided email.',
        );
      }
      await auth().sendPasswordResetEmail(normalizedEmail);
      return 'Password reset email sent';
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'An error occurred during password reset.',
      );
    }
  },
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({oldPassword, newPassword}: ResetPassword, thunkAPI) => {
    try {
      const user = auth().currentUser;
      if (!user) {
        return thunkAPI.rejectWithValue('No user is currently signed in.');
      }
      const credential = auth.EmailAuthProvider.credential(
        user?.email!,
        oldPassword,
      );
      await user.reauthenticateWithCredential(credential);
      await user.updatePassword(newPassword);
      return 'Password has been updated.';
    } catch (error: any) {
      if (error.code === 'auth/wrong-password') {
        return thunkAPI.rejectWithValue('Wrong password. Please try again.');
      }
      if (error.code === 'auth/invalid-credential') {
        return thunkAPI.rejectWithValue(
          'Invalid credential. Please try again.',
        );
      }
      return thunkAPI.rejectWithValue(
        'An error occurred during password reset.',
      );
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signupUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = 'idle';
        state.error = null;
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

export default authSlice.reducer;
