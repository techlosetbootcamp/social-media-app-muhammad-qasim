import {useState} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks/reduxHook';
import {loginUser} from '../../store/slice/authSlice';

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const login = async () => {
    const normalizedEmail = email.trim().toLowerCase().replace(/\s+/g, '_');

    try {
      await dispatch(
        loginUser({identifier: normalizedEmail, password}),
      ).unwrap();
      setError(null);
    } catch (err) {
      setError(err as string);
    }
  };

  return {
    setEmail,
    setPassword,
    login,
    user,
    error,
  };
};
