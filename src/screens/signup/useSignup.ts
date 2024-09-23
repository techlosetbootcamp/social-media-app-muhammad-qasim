import {useState} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks/reduxHook';
import {loginGoogle, signupUser} from '../../store/slice/authSlice';
import {validateSignUpData} from '../../utils/validation';
import Toast from 'react-native-toast-message';
import useTypeNavigation from '../../hooks/useTypeNavigationHook';
import useGoogleLogin from '../../hooks/useGoogleLogin';
import firestore from '@react-native-firebase/firestore';

export const useSignup = () => {
  const dispatch = useAppDispatch();
  const navigation = useTypeNavigation();
  const {signIn} = useGoogleLogin();
  const user = useAppSelector(state => state.auth);
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (name: string, value: string) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const signup = async () => {
    const {userName, email, password, confirmPassword} = formData;
    const errors = validateSignUpData({
      userName,
      email,
      password,
      confirmPassword,
    });
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach(err =>
        Toast.show({type: 'error', text1: err}),
      );
      return;
    }

    try {
      await dispatch(signupUser({userName, email, password})).unwrap();
      setFormData({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

      Toast.show({
        type: 'success',
        text1: 'Signup successful',
        text2: 'Please login with your credentials',
      });
      navigation.navigate('Login');
    } catch (error) {
      Toast.show({type: 'error', text1: error as string});
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      const userInfo = await signIn();
      const user = userInfo?.user;
      const userId = user?.uid;
      if (!user || !userId) {
        Toast.show({type: 'error', text1: 'Google Sign-in Failed'});
        return;
      }
      const userDoc = await firestore().collection('users').doc(userId).get();
      if (userDoc.exists) {
        Toast.show({
          type: 'success',
          text1: 'Google Sign-in Successful',
          text2: 'Welcome back!',
        });
        return;
      }
      dispatch(loginGoogle(user));
      Toast.show({type: 'success', text1: 'Google Sign-in Successful'});
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: (error as string) || 'An error occurred during sign-in',
      });
    }
  };

  return {
    handleChange,
    handleSignup: signup,
    ...formData,
    user,
    handleSignInWithGoogle,
  };
};
