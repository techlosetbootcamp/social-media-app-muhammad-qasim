import {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHook';
import {fetchProfile} from '../../store/slice/profileSlice';

export const useOtherUserProfile = ({userId}: {userId: string}) => {
  const dispatch = useAppDispatch();
  const profileState = useAppSelector(state => state.profile);

  const fetchProfileData = useCallback(async () => {
    if (userId) {
      try {
        await dispatch(fetchProfile(userId)).unwrap();
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    }
  }, [dispatch, userId]);

  useFocusEffect(
    useCallback(() => {
      fetchProfileData();
    }, [fetchProfileData]),
  );

  return {
    profileState,
  };
};
