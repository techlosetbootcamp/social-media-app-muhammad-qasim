import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {FetchProfileProps, ProfileState, User} from '../../types/types';
import storage from '@react-native-firebase/storage';

const initialState: ProfileState = {
  profileData: null,
  status: 'idle',
  error: null,
};

export const fetchProfile = createAsyncThunk(
  'profile/fetchProfile',
  async (uid: FetchProfileProps | undefined, thunkAPI) => {
    try {
      const user = auth().currentUser;
      const userId = uid || user;

      if (!userId) {
        return thunkAPI.rejectWithValue(
          'No user is currently signed in or provided.',
        );
      }
      const userSnapshot = await firestore()
        .collection('users')
        .where('uid', '==', userId)
        .get();

      if (userSnapshot.empty) {
        return thunkAPI.rejectWithValue('No user found with the provided UID.');
      }

      const profileData = userSnapshot.docs[0].data();
      const imagesSnapshot = await firestore()
        .collection('images')
        .where('userId', '==', userId)
        .get();

      const images = imagesSnapshot.docs.map(doc => doc.data().imageUrl);
      const {createdAt, ...profileWithoutCreatedAt} = profileData;
      const profileWithImages = {
        ...profileWithoutCreatedAt,
        images,
      } as User;

      return profileWithImages;
    } catch (error) {
      console.error('Error fetching profile:', error);
      return thunkAPI.rejectWithValue('Failed to fetch profile.');
    }
  },
);

export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async (data: User, thunkAPI) => {
    try {
      const userName = data.username.trim().toLowerCase().replace(/\s+/g, '_');
      const user = auth().currentUser;
      if (!user) {
        return thunkAPI.rejectWithValue('No user is currently signed in.');
      }

      const userDocRef = firestore().collection('users').doc(user.uid);
      const userDoc = await userDocRef.get();
      if (!userDoc.exists) {
        return thunkAPI.rejectWithValue('User does not exist.');
      }
      const existingUserByUsername = await firestore()
        .collection('users')
        .where('username', '==', userName)
        .get();

      if (
        !existingUserByUsername.empty &&
        existingUserByUsername.docs[0].id !== user.uid
      ) {
        return thunkAPI.rejectWithValue('Username already exists.');
      }

      if (data.profilePicture && !data.profilePicture.startsWith('https://')) {
        const fileExtension = data.profilePicture.split('.').pop() || 'jpg';
        if (!['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
          return thunkAPI.rejectWithValue('Unsupported file type');
        }
        const fileName = `${new Date().toISOString()}.${fileExtension}`;
        const reference = storage().ref(fileName);
        await reference.putFile(data.profilePicture);
        data.profilePicture = await reference.getDownloadURL();
      }

      await userDocRef.set({...data, username: userName}, {merge: true});

      return data;
    } catch (error) {
      console.error('Error updating profile:', error);
      return thunkAPI.rejectWithValue('Failed to update profile.');
    }
  },
);

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProfile.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.profileData = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
    builder
      .addCase(updateProfile.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.profileData = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default profileSlice.reducer;
