import {configureStore, combineReducers} from '@reduxjs/toolkit';
import authSlice from './slice/authSlice';
import profileSlice from './slice/profileSlice';
import postsSlice from './slice/postsSlice';

const appReducer = combineReducers({
  auth: authSlice,
  profile: profileSlice,
  posts: postsSlice,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'reset/resetStore') {
    state = undefined;
  }
  return appReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
