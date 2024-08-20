import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHook';
import {fetchProfile} from '../../store/slice/profileSlice';

export const useProfile = () => {
  const dispatch = useAppDispatch();
  const profileState = useAppSelector(state => state.profile);

  useEffect(() => {
    if (profileState.status === 'idle') {
      const fetchProfileData = async () => {
        try {
          await dispatch(fetchProfile()).unwrap();
        } catch (error) {
          console.error('Failed to fetch profile:', error);
        }
      };

      fetchProfileData();
    }
  }, [dispatch, profileState.status]);

  return {
    profileState,
  };
};
