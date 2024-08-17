import {configureStore} from '@reduxjs/toolkit';
import authSlice from './slice/authSlice';
import imageSlice from './slice/uploadImageSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    image: imageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
