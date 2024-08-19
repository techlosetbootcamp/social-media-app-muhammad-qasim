import {useEffect} from 'react';
import ForgetPassword from './src/screens/forgetPassword/ForgetPassword';
import Login from './src/screens/login/Login';
import Main from './src/screens/main/Main';
import Profile from './src/screens/profile/Profile';
import ProfileEdit from './src/screens/profileEdit/ProfileEdit';
import ResetPassword from './src/screens/resetPassword/ResetPassword';
import Signup from './src/screens/signup/Signup';
import UploadImage from './src/screens/uploadImage/UploadImage';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import store from './src/store/store';
import Toast from 'react-native-toast-message';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <Profile />
      <Toast />
    </Provider>
  );
};

export default App;
