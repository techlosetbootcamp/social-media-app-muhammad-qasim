import {useState} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks/reduxHook';
import {signupUser} from '../../store/slice/authSlice';

export const useSignup = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth.user);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const signup = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    const normalizedUserName = userName
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '_');
    const normalizedEmail = email.trim().toLowerCase();
    try {
      await dispatch(
        signupUser({
          userName: normalizedUserName,
          email: normalizedEmail,
          password,
        }),
      ).unwrap();
      setError(null);
    } catch (err) {
      setError(err as string);
    }
  };

  return {
    setUserName,
    setEmail,
    setPassword,
    setConfirmPassword,
    handleSignup: signup,
    user,
    error,
  };
};
