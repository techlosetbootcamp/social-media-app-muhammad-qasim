import {firebase} from '@react-native-firebase/auth';
import {useEffect, useState} from 'react';
import {FirebaseUser} from '../types/types';
import {useAppSelector} from '../hooks/reduxHook';

const useAuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser>(null);
  const user = useAppSelector(state => state.auth.user);
  const profile = useAppSelector(state => state.profile.profileData);
  useEffect(() => {
    const unsubscribe = firebase
      .auth()
      .onAuthStateChanged((user: FirebaseUser) => {
        setCurrentUser(user);
      });
    return () => unsubscribe();
  }, [user, profile]);
  return currentUser;
};

export default useAuthNavigation;
