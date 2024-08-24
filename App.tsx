import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import store from './src/store/store';
import Toast from 'react-native-toast-message';
import Navigation from './src/navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
      <Toast />
    </Provider>
  );
};

export default App;
