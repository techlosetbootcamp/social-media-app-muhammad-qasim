import {useState} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks/reduxHook';
import {signupUser} from '../../store/slice/authSlice';
import {signUpSchema} from '../../constants/FormSchema';
import {z} from 'zod';
import Toast from 'react-native-toast-message';
import useTypeNavigation from '../../hooks/useTypeNavigationHook';

export const useSignup = () => {
  const dispatch = useAppDispatch();
  const navigation = useTypeNavigation();
  const user = useAppSelector(state => state.auth);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const signup = async () => {
    if (password !== confirmPassword) {
      Toast.show({type: 'error', text1: 'Passwords do not match'});
      return;
    }

    try {
      signUpSchema.parse({userName, email, password, confirmPassword});
      await dispatch(
        signupUser({
          userName: userName,
          email: email,
          password,
        }),
      ).unwrap();
      setUserName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      Toast.show({
        type: 'success',
        text1: 'Signup successful',
        text2: 'Please login with your credentials',
      });
      navigation.navigate('Login');
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
    setUserName,
    setEmail,
    setPassword,
    setConfirmPassword,
    handleSignup: signup,
    userName,
    email,
    password,
    confirmPassword,
    user,
  };
};
