import {useState} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks/reduxHook';
import {loginUser} from '../../store/slice/authSlice';
import {loginSchema} from '../../constants/FormSchema';
import {z} from 'zod';
import Toast from 'react-native-toast-message';

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      loginSchema.parse({identifier, password});
      await dispatch(loginUser({identifier, password})).unwrap();
      setIdentifier('');
      setPassword('');
      Toast.show({type: 'success', text1: 'Login successful'});
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach(err =>
          Toast.show({type: 'error', text1: err.message}),
        );
      } else {
        Toast.show({type: 'error', text1: error as string});
      }
    }
  };

  return {
    setIdentifier,
    setPassword,
    identifier,
    password,
    login,
    user,
  };
};
