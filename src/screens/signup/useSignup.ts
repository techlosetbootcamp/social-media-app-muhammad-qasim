import {useState} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks/reduxHook';
import {signupUser} from '../../store/slice/authSlice';
import {validateSignUpData} from '../../constants/FormSchema';
import Toast from 'react-native-toast-message';
import useTypeNavigation from '../../hooks/useTypeNavigationHook';

export const useSignup = () => {
  const dispatch = useAppDispatch();
  const navigation = useTypeNavigation();
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

  return {
    handleChange,
    handleSignup: signup,
    ...formData,
    user,
  };
};
