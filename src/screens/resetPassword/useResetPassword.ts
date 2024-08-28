import {useState} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks/reduxHook';
import {resetPassword} from '../../store/slice/authSlice';
import {validateResetPasswordData} from '../../constants/FormSchema';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';
import {resetStore} from '../../store/slice/resetSlice';

export const useResetPassword = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const resetPasswordHandler = async () => {
    const errors = validateResetPasswordData({
      oldPassword,
      newPassword,
      confirmPassword,
    });
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach(err =>
        Toast.show({type: 'error', text1: err}),
      );
      return;
    }
    try {
      await dispatch(resetPassword({oldPassword, newPassword})).unwrap();
      await auth().signOut();
      dispatch(resetStore());
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
      Toast.show({
        type: 'success',
        text1: 'Password reset successful',
        text2: 'Please login with your new password',
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: (error as string) || 'Something went wrong',
      });
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
