import {useAppDispatch, useAppSelector} from '../../hooks/reduxHook';
import {fetchMorePostsWithImagesAndUsers} from '../../store/slice/postsSlice';
import {useCallback, useMemo, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';

export const usePosts = () => {
  const dispatch = useAppDispatch();
  const postsState = useAppSelector(state => state.posts);
  const [refreshing, setRefreshing] = useState(false);
  useFocusEffect(
    useCallback(() => {
      if (postsState?.status === 'idle' && postsState?.posts?.length === 0) {
        (async () => {
          try {
            await dispatch(fetchMorePostsWithImagesAndUsers(false)).unwrap();
          } catch (error) {
            console.error('Failed to fetch posts:', error);
          }
        })();
      }
    }, [dispatch, postsState?.status, postsState?.posts?.length]),
  );

  const refresh = useCallback(async () => {
    setRefreshing(true);
    try {
      await dispatch(fetchMorePostsWithImagesAndUsers(true)).unwrap();
    } catch (error) {
      console.error('Failed to refresh posts:', error);
    } finally {
      setRefreshing(false);
    }
  }, [dispatch]);

  const loadMorePosts = useCallback(async () => {
    if (postsState?.status === 'succeeded' && !postsState?.isEndOfList) {
      try {
        await dispatch(fetchMorePostsWithImagesAndUsers(false)).unwrap();
      } catch (error) {
        console.error('Failed to load more posts:', error);
      }
    }
  }, [dispatch, postsState?.status, postsState?.isEndOfList]);

  const handleEndReached = useCallback(() => {
    if (!postsState?.isEndOfList && postsState?.status === 'succeeded') {
      loadMorePosts();
    }
  }, [loadMorePosts, postsState?.isEndOfList, postsState?.status]);

  const isInitialLoading = useMemo(
    () => postsState?.status === 'loading' && postsState?.posts?.length === 0,
    [postsState?.status, postsState?.posts?.length],
  );

  const isLoadingMore = useMemo(
    () => postsState?.status === 'loadingMore',
    [postsState?.status],
  );

  const isEmpty = useMemo(
    () => postsState?.status === 'idle' && postsState?.posts?.length === 0,
    [postsState?.status, postsState?.posts?.length],
  );

  const isEndOfList = useMemo(
    () => postsState?.isEndOfList,
    [postsState?.isEndOfList],
  );

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
    });
  };

  return {
    postsState,
    handleEndReached,
    isInitialLoading,
    isLoadingMore,
    isEmpty,
    isEndOfList,
    formatDate,
    refreshing,
    refresh,
  };
};
