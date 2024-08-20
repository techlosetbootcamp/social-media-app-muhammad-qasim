import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import {PostsState, Image, Post, PostUser} from '../../types/types';

const initialState: PostsState = {
  posts: [],
  status: 'idle',
  error: null,
};

export const fetchPostsWithImagesAndUsers = createAsyncThunk(
  'posts/fetchPostsWithImagesAndUsers',
  async (_, thunkAPI) => {
    try {
      const imagesSnapshot = await firestore().collection('images').get();
      if (imagesSnapshot.empty) {
        return thunkAPI.rejectWithValue('No images found.');
      }
      const imagesData: Image[] = imagesSnapshot.docs.map(doc => {
        const data = doc.data();
        const createdAtDate = data.createdAt.toDate();
        const createdAt = createdAtDate.toISOString();
        return {
          imageUrl: data.imageUrl,
          userId: data.userId,
          description: data.description,
          createdAt,
        } as Image;
      });
      const userIds = Array.from(
        new Set(imagesData.map(image => image.userId)),
      );
      const userPromises = userIds.map(userId =>
        firestore().collection('users').where('userId', '==', userId).get(),
      );
      const usersSnapshots = await Promise.all(userPromises);
      const usersData: Record<string, PostUser> = {};
      usersSnapshots.forEach(snapshot => {
        snapshot.docs.forEach(doc => {
          const data = doc.data();
          const createdAt = data.createdAt.toDate().toISOString();
          usersData[data.userId] = {
            id: data.id,
            email: data.email,
            name: data.name,
            profilePicture: data.profilePicture,
            createdAt,
          } as PostUser;
        });
      });
      const postsWithImagesAndUsers: Post[] = imagesData.map(image => ({
        image,
        user: usersData[image.userId],
      }));
      postsWithImagesAndUsers.sort(
        (a, b) =>
          new Date(b.image.createdAt).getTime() -
          new Date(a.image.createdAt).getTime(),
      );
      postsWithImagesAndUsers.forEach(post => {
        post.image.createdAt = formatDate(new Date(post.image.createdAt));
        post.user.createdAt = formatDate(new Date(post.user.createdAt));
      });

      return postsWithImagesAndUsers;
    } catch (error) {
      console.error('Error fetching posts with images and users:', error);
      return thunkAPI.rejectWithValue(
        'Failed to fetch posts with images and users.',
      );
    }
  },
);

function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {month: 'long', day: 'numeric'};
  return date.toLocaleDateString('en-US', options);
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPostsWithImagesAndUsers.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        fetchPostsWithImagesAndUsers.fulfilled,
        (state, action: PayloadAction<Post[]>) => {
          state.status = 'succeeded';
          state.posts = action.payload;
          state.error = null;
        },
      )
      .addCase(fetchPostsWithImagesAndUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default postsSlice.reducer;
