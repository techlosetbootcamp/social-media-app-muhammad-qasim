import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHook';
import {fetchProfile} from '../../store/slice/profileSlice';

export const useProfile = () => {
  const dispatch = useAppDispatch();
  const profileState = useAppSelector(state => state.profile);

  useEffect(() => {
    dispatch(fetchProfile()).unwrap();
  }, [dispatch]);

  return {
    profileState,
  };
};
