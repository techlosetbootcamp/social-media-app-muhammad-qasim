import {useState} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks/reduxHook';
import {loginGoogle, loginUser} from '../../store/slice/authSlice';
import {validateLoginData} from '../../utils/validation';
import Toast from 'react-native-toast-message';
import useGoogleLogin from '../../hooks/useGoogleLogin';
import firestore from '@react-native-firebase/firestore';

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const {signIn} = useGoogleLogin();
  const user = useAppSelector(state => state.auth);
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
  });

  const handleChange = (name: string, value: string) => {
    setFormData(prevData => ({...prevData, [name]: value}));
  };

  const login = async () => {
    const errors = validateLoginData(formData);
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach(err =>
        Toast.show({type: 'error', text1: err}),
      );
      return;
    }
    try {
      await dispatch(
        loginUser({
          identifier: formData?.identifier,
          password: formData?.password,
        }),
      ).unwrap();
      setFormData({
        identifier: '',
        password: '',
      });
      Toast.show({type: 'success', text1: 'Login successful'});
    } catch (error) {
      Toast.show({type: 'error', text1: (error as string) || 'Login failed'});
    }
  };

  const handleLoginWithGoogle = async () => {
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
    login,
    ...formData,
    user,
    handleLoginWithGoogle,
  };
};
