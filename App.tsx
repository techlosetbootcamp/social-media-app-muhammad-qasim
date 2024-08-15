import {useEffect} from 'react';
import ForgetPassword from './src/screens/forgetPassword/ForgetPassword';
import Login from './src/screens/login/Login';
import Main from './src/screens/main/Main';
import Profile from './src/screens/profile/Profile';
import ProfileEdit from './src/screens/profileEdit/ProfileEdit';
import ProfileSelf from './src/screens/profileSelf/ProfileSelf';
import ResetPassword from './src/screens/resetPassword/ResetPassword';
import Signup from './src/screens/signup/Signup';
import UploadImage from './src/screens/uploadImage/UploadImage';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <ProfileSelf />;
};

export default App;
