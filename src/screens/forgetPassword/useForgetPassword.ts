import {useState} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks/reduxHook';
import {forgotPassword} from '../../store/slice/authSlice';

export const useForgetPassword = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth.user);
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);

  const forgotPasswordHandler = async () => {
    const normalizedEmail = email.trim().toLowerCase();

    try {
      await dispatch(forgotPassword(normalizedEmail)).unwrap();
      setError(null);
    } catch (err) {
      setError(err as string);
    }
  };

  return {
    setEmail,
    forgotPasswordHandler,
    user,
    error,
  };
};
