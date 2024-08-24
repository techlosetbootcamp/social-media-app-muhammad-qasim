import {configureStore, combineReducers, PayloadAction} from '@reduxjs/toolkit';
import authSlice from './slice/authSlice';
import profileSlice from './slice/profileSlice';
import postsSlice from './slice/postsSlice';

const appReducer = combineReducers({
  auth: authSlice,
  profile: profileSlice,
  posts: postsSlice,
});

export type RootState = ReturnType<typeof appReducer>;

const rootReducer = (
  state: RootState | undefined,
  action: PayloadAction,
): RootState => {
  if (action.type === 'reset/resetStore') {
    state = undefined;
  }
  return appReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export default store;
