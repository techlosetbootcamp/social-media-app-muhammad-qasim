import {useCallback} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHook';
import {fetchProfile} from '../../store/slice/profileSlice';
import {useFocusEffect} from '@react-navigation/native';

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
