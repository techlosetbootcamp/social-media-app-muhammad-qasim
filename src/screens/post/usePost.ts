import {useAppDispatch, useAppSelector} from '../../hooks/reduxHook';
import {fetchPostsWithImagesAndUsers} from '../../store/slice/postSlice';
import {useEffect} from 'react';

export const usePost = () => {
  const dispatch = useAppDispatch();
  const postState = useAppSelector(state => state.post);

  useEffect(() => {
    if (postState.status === 'idle') {
      (async () => {
        try {
          await dispatch(fetchPostsWithImagesAndUsers()).unwrap();
        } catch (error) {
          console.error('Failed to fetch posts:', error);
        }
      })();
    }
  }, [dispatch, postState.status]);

  return {
    postState,
  };
};
