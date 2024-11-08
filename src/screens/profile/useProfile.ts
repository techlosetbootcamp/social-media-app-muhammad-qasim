import {useCallback} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHook';
import {fetchProfile} from '../../store/slice/profileSlice';
import {useFocusEffect} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {resetStore} from '../../store/slice/resetSlice';
import Toast from 'react-native-toast-message';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const useProfile = () => {
  const dispatch = useAppDispatch();
  const profileState = useAppSelector(state => state.profile);

  useFocusEffect(
    useCallback(() => {
      const fetchProfileData = async () => {
        try {
          await dispatch(fetchProfile()).unwrap();
        } catch (error) {
          Toast.show({
            type: 'error',
            text1: error as string,
          });
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
      const googleUser = await GoogleSignin.getCurrentUser();
      if (googleUser) {
        await GoogleSignin.signOut();
      }
      await auth().signOut();
      dispatch(resetStore());
      Toast.show({
        type: 'success',
        text1: 'Logout successful',
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Logout failed',
        text2: 'An error occurred while logging out. Please try again.',
      });
    }
  };

  return {logoutHandler};
};
