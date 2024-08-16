import {useState} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks/reduxHook';
import {resetPassword} from '../../store/slice/authSlice';

export const useResetPassword = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth.user);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const resetPasswordHandler = async () => {
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await dispatch(resetPassword({oldPassword, newPassword})).unwrap();
      setError(null);
    } catch (err) {
      setError(err as string);
    }
  };

  return {
    setOldPassword,
    setNewPassword,
    setConfirmPassword,
    resetPasswordHandler,
    user,
    error,
  };
};
