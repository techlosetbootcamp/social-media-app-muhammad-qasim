import {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHook';
import {fetchProfile} from '../../store/slice/profileSlice';
import Toast from 'react-native-toast-message';

export const useOtherUserProfile = ({userId}: {userId: string}) => {
  const dispatch = useAppDispatch();
  const profileState = useAppSelector(state => state.profile);

  const fetchProfileData = useCallback(async () => {
    if (userId) {
      try {
        await dispatch(fetchProfile(userId)).unwrap();
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: error as string,
        });
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
