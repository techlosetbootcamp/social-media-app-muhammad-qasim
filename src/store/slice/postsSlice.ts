import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import {RootState} from '../store';
import {PostsState, Image, PostUser, Post} from '../../types/types';

const initialState: PostsState = {
  posts: [],
  status: 'idle',
  error: null,
  lastDocumentId: null,
  isEndOfList: false,
};

export const fetchMorePostsWithImagesAndUsers = createAsyncThunk(
  'posts/fetchMorePostsWithImagesAndUsers',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;
      const lastDocumentId = state?.posts?.lastDocumentId;
      let imagesQuery = firestore()
        .collection('images')
        .orderBy('createdAt', 'desc')
        .limit(10);

      if (lastDocumentId) {
        const lastDocumentSnapshot = await firestore()
          .collection('images')
          .doc(lastDocumentId)
          .get();
        imagesQuery = imagesQuery.startAfter(lastDocumentSnapshot);
      }

      const imagesSnapshot = await imagesQuery.get();
      if (imagesSnapshot.empty) {
        return {
          posts: [],
          lastDocumentId: null,
          isEndOfList: true,
        };
      }

      const imagesData: Image[] = imagesSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          imageUrl: data?.imageUrl,
          userId: data?.userId,
          description: data?.description,
          createdAt:
            data?.createdAt instanceof firestore.Timestamp
              ? data?.createdAt?.toDate().toISOString()
              : new Date(data?.createdAt).toISOString(),
        };
      });

      const userIds = Array.from(
        new Set(imagesData.map(image => image?.userId)),
      );
      const userPromises = userIds?.map(userId =>
        firestore().collection('users').where('userId', '==', userId).get(),
      );

      const usersSnapshots = await Promise.all(userPromises);
      const usersData: Record<string, PostUser> = {};
      usersSnapshots?.forEach(snapshot => {
        snapshot.docs.forEach(doc => {
          const data = doc.data();
          usersData[data?.userId] = {
            id: data?.userId,
            email: data?.email,
            name: data?.name,
            profilePicture: data?.profilePicture,
            createdAt:
              data?.createdAt instanceof firestore.Timestamp
                ? data?.createdAt?.toDate().toISOString()
                : new Date(data?.createdAt).toISOString(),
          };
        });
      });

      const postsWithImagesAndUsers: Post[] = imagesData?.map(image => ({
        image,
        user: usersData[image.userId],
      }));

      return {
        posts: postsWithImagesAndUsers,
        lastDocumentId:
          imagesSnapshot?.docs[imagesSnapshot?.docs?.length - 1]?.id,
        isEndOfList: imagesSnapshot?.docs?.length < 10,
      };
    } catch (error) {
      console.error('Error fetching more posts:', error);
      return thunkAPI.rejectWithValue('Failed to fetch more posts.');
    }
  },
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMorePostsWithImagesAndUsers.pending, state => {
        state.status = state.posts.length === 0 ? 'loading' : 'loadingMore';
      })
      .addCase(
        fetchMorePostsWithImagesAndUsers.fulfilled,
        (
          state,
          action: PayloadAction<{
            posts: Post[];
            lastDocumentId: string | null;
            isEndOfList: boolean;
          }>,
        ) => {
          state.status = 'succeeded';
          if (action.payload.posts.length > 0) {
            state.posts = [...state.posts, ...action.payload.posts];
            state.lastDocumentId = action.payload.lastDocumentId;
            state.isEndOfList = action.payload.isEndOfList;
          } else {
            state.isEndOfList = true;
          }
          state.error = null;
        },
      )
      .addCase(fetchMorePostsWithImagesAndUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});
export default postsSlice.reducer;
