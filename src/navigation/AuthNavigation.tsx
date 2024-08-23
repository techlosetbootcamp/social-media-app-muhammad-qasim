import {firebase} from '@react-native-firebase/auth';
import {useEffect, useState} from 'react';
import {FirebaseUser} from '../types/types';

const useAuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser>(null);

  useEffect(() => {
    const unsubscribe = firebase
      .auth()
      .onAuthStateChanged((user: FirebaseUser) => {
        setCurrentUser(user);
      });
    return () => unsubscribe();
  }, []);
  return currentUser;
};

export default useAuthNavigation;
