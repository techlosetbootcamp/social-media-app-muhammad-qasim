import {useState} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks/reduxHook';
import {loginUser} from '../../store/slice/authSlice';
import {validateLoginData} from '../../constants/FormSchema';
import Toast from 'react-native-toast-message';

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    const errors = validateLoginData({identifier, password});
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach(err =>
        Toast.show({type: 'error', text1: err}),
      );
      return;
    }
    try {
      await dispatch(loginUser({identifier, password})).unwrap();
      setIdentifier('');
      setPassword('');
      Toast.show({type: 'success', text1: 'Login successful'});
    } catch (error) {
      Toast.show({type: 'error', text1: (error as string) || 'Login failed'});
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
