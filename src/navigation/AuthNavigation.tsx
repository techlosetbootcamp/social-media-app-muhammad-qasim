import {firebase, FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useEffect, useState} from 'react';

type User = FirebaseAuthTypes.User | null;

const useAuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState<User>(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user: User) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);
  return currentUser;
};

export default useAuthNavigation;
