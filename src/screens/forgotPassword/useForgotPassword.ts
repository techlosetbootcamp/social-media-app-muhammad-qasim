import {useState} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks/reduxHook';
import {forgotPassword} from '../../store/slice/authSlice';
import {validateForgotPasswordData} from '../../constants/FormSchema';
import Toast from 'react-native-toast-message';
import useTypeNavigation from '../../hooks/useTypeNavigationHook';

export const useForgotPassword = () => {
  const dispatch = useAppDispatch();
  const navigation = useTypeNavigation();
  const user = useAppSelector(state => state.auth);
  const [email, setEmail] = useState('');

  const forgotPasswordHandler = async () => {
    const errors = validateForgotPasswordData({email});
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach(err =>
        Toast.show({type: 'error', text1: err}),
      );
      return;
    }
    try {
      await dispatch(forgotPassword(email)).unwrap();
      setEmail('');
      Toast.show({
        type: 'success',
        text1: 'Password reset email sent',
        text2: 'Please check your email',
      });
      navigation.navigate('Login');
    } catch (error) {
      Toast.show({type: 'error', text1: (error as string) || 'Error occurred'});
    }
  };

  return {
    setEmail,
    forgotPasswordHandler,
    email,
    user,
  };
};
