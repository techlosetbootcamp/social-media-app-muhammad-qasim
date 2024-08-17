import {useState} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks/reduxHook';
import {resetPassword} from '../../store/slice/authSlice';
import {resetPasswordSchema} from '../../constants/FormSchema';
import {z} from 'zod';
import Toast from 'react-native-toast-message';

export const useResetPassword = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const resetPasswordHandler = async () => {
    if (newPassword !== confirmPassword) {
      Toast.show({type: 'error', text1: 'Passwords do not match'});
      return;
    }

    try {
      resetPasswordSchema.parse({oldPassword, newPassword, confirmPassword});
      await dispatch(resetPassword({oldPassword, newPassword})).unwrap();
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
      Toast.show({type: 'success', text1: 'Password reset successful'});
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach(err => {
          Toast.show({type: 'error', text1: err.message});
        });
      } else {
        Toast.show({type: 'error', text1: error as string});
      }
    }
  };

  return {
    setOldPassword,
    setNewPassword,
    setConfirmPassword,
    resetPasswordHandler,
    oldPassword,
    newPassword,
    confirmPassword,
    user,
  };
};
