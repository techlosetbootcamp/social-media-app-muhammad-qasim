import {useState} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks/reduxHook';
import {resetPassword} from '../../store/slice/authSlice';
import {validateResetPasswordData} from '../../utils/validation';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';
import {resetStore} from '../../store/slice/resetSlice';

export const useResetPassword = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth);

  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (name: string, value: string) => {
    setFormData(prevData => ({...prevData, [name]: value}));
  };

  const resetPasswordHandler = async () => {
    const errors = validateResetPasswordData(formData);
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach(err =>
        Toast.show({type: 'error', text1: err}),
      );
      return;
    }
    try {
      await dispatch(
        resetPassword({
          oldPassword: formData?.oldPassword,
          newPassword: formData?.newPassword,
        }),
      ).unwrap();
      await auth().signOut();
      dispatch(resetStore());
      setFormData({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
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
    handleChange,
    resetPasswordHandler,
    ...formData,
    user,
  };
};
