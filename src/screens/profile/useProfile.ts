import {useCallback} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHook';
import {fetchProfile} from '../../store/slice/profileSlice';
import {useFocusEffect} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {resetStore} from '../../store/slice/resetSlice';
import Toast from 'react-native-toast-message';

export const useProfile = () => {
  const dispatch = useAppDispatch();
  const profileState = useAppSelector(state => state.profile);

  useFocusEffect(
    useCallback(() => {
      const fetchProfileData = async () => {
        try {
          await dispatch(fetchProfile()).unwrap();
        } catch (error) {
          console.error('Failed to fetch profile:', error);
        }
      };

      fetchProfileData();
    }, [dispatch]),
  );

  return {
    profileState,
  };
};

export const useLogoutHandler = () => {
  const dispatch = useAppDispatch();
  const logoutHandler = async () => {
    try {
      await auth().signOut();
      dispatch(resetStore());
      Toast.show({type: 'success', text1: 'Logout successful'});
    } catch (error) {
      console.error('Failed to logout:', error);
      Toast.show({
        type: 'error',
        text1: 'Logout failed',
        text2: 'An error occurred while logging out.',
      });
    }
  };

  return {
    logoutHandler,
  };
};
