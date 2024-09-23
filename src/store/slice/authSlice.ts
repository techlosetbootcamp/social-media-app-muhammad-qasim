import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {
  AuthState,
  LoginUser,
  ReduxUser,
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
  async (data: LoginUser, {rejectWithValue}) => {
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
          return rejectWithValue('No user found with the provided username.');
        }
        email = userSnapshot?.docs[0]?.data()?.email;
        if (!email) {
          return rejectWithValue('Failed to retrieve the user email.');
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
        return rejectWithValue('User not found. Please try again.');
      }
      if (error.code === 'auth/invalid-credential') {
        return rejectWithValue('Invalid credential. Please try again.');
      }
      if (error.code === 'auth/wrong-password') {
        return rejectWithValue('Wrong password. Please try again.');
      }
      return rejectWithValue('An error occurred during login.');
    }
  },
);

export const loginGoogle = createAsyncThunk(
  'auth/loginGoogle',
  async (user: FirebaseAuthTypes.User, {rejectWithValue}) => {
    try {
      const email = user?.email?.trim().toLowerCase() || '';
      const displayName = user?.displayName?.trim() || '';
      const username =
        displayName.toLowerCase().replace(/\s+/g, '_') || email.split('@')[0];
      const phone = user?.phoneNumber || '';
      const profilePicture = user?.photoURL || '';
      const userId = user?.uid;

      if (!userId || !email || !displayName) {
        return rejectWithValue('Failed to retrieve necessary user data.');
      }
      await firestore().collection('users').doc(userId).set({
        username,
        email,
        name: displayName,
        phone,
        profilePicture,
        userId,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
      return {
        uid: userId,
        email: email,
        displayName: displayName,
      };
    } catch (error: any) {
      if (error.code === 'auth/network-request-failed') {
        return rejectWithValue('Network request failed. Please try again.');
      }
      return rejectWithValue('An error occurred during login.');
    }
  },
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email: string, {rejectWithValue}) => {
    try {
      const normalizedEmail = email?.trim().toLowerCase();
      const userSnapshot = await firestore()
        .collection('users')
        .where('email', '==', normalizedEmail)
        .get();

      if (userSnapshot.empty) {
        return rejectWithValue('No user found with the provided email.');
      }
      await auth().sendPasswordResetEmail(normalizedEmail);
      return 'Password reset email sent';
    } catch (error) {
      return rejectWithValue('An error occurred during password reset.');
    }
  },
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({oldPassword, newPassword}: ResetPassword, {rejectWithValue}) => {
    try {
      const user = auth().currentUser;
      if (!user) {
        return rejectWithValue('No user is currently signed in.');
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
        return rejectWithValue('Wrong password. Please try again.');
      }
      if (error.code === 'auth/invalid-credential') {
        return rejectWithValue('Invalid credential. Please try again.');
      }
      return rejectWithValue('An error occurred during password reset.');
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
      .addCase(loginGoogle.pending, state => {
        state.status = 'loading';
      })
      .addCase(loginGoogle.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload as ReduxUser;
      })
      .addCase(loginGoogle.rejected, (state, action) => {
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
