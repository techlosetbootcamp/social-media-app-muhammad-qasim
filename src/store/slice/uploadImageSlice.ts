import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {ImageState, UlpoadImage} from '../../types/types';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const initialState: ImageState = {
  imageUri: null,
  status: 'idle',
  error: null,
};

export const uploadImage = createAsyncThunk(
  'image/uploadImage',
  async ({imageUri, description}: UlpoadImage, {rejectWithValue}) => {
    try {
      const fileExtension = imageUri.split('.').pop() || 'jpg';
      console.log(fileExtension);

      if (!['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
        return rejectWithValue('Unsupported file type');
      }
      const fileName = `${new Date().toISOString()}.${fileExtension}`;
      const reference = storage().ref(fileName);
      await reference.putFile(imageUri);
      const imageUrl = await reference.getDownloadURL();
      const user = auth().currentUser;
      if (!user) {
        return rejectWithValue('User not authenticated');
      }
      await firestore().collection('images').add({
        imageUrl,
        description,
        userId: user.uid,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

      return 'Image uploaded successfully';
    } catch (error: any) {
      console.error('Error uploading image:', error);
      return rejectWithValue('Failed to upload image');
    }
  },
);

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    resetImageState: state => {
      state.imageUri = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(uploadImage.pending, state => {
        state.status = 'loading';
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.imageUri = action.payload;
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const {resetImageState} = imageSlice.actions;
export default imageSlice.reducer;
