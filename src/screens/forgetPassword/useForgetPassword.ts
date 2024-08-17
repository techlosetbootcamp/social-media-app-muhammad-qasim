import {useState} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks/reduxHook';
import {forgotPassword} from '../../store/slice/authSlice';
import {forgotPasswordSchema} from '../../constants/FormSchema';
import {z} from 'zod';
import Toast from 'react-native-toast-message';

export const useForgetPassword = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth);
  const [email, setEmail] = useState('');

  const forgotPasswordHandler = async () => {
    try {
      forgotPasswordSchema.parse({email});
      await dispatch(forgotPassword(email)).unwrap();
      setEmail('');
      Toast.show({type: 'success', text1: 'Reset link sent to your email'});
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
    setEmail,
    forgotPasswordHandler,
    email,
    user,
  };
};
