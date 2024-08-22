import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Logo from '../../components/logo/Logo';
import Backward from '../../components/backward/Backward';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import {Colors} from '../../constants/Colors';
import {useLogin} from './useLogin';
import Loader from '../../components/loader/Loader';

const Login = ({navigation}: any) => {
  const {setIdentifier, setPassword, identifier, password, login, user} =
    useLogin();

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      keyboardShouldPersistTaps="handled">
      <View style={styles.main}>
        <Backward />
        <View style={styles.container}>
          <Logo marginBottom={39} marginTop={80} />
          <View style={styles.formContainer}>
            <Input
              placeholder="Email/Username"
              onChangeText={setIdentifier}
              value={identifier}
            />
            <Input
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={setPassword}
              value={password}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>
            <Button style={{marginVertical: 30}} onPress={login}>
              <Loader userStatus={user.status} text="Login" />
            </Button>
            <TouchableOpacity style={styles.loginWithGoogle}>
              <Image
                source={require('../../assets/images/googleIcon.png')}
                style={styles.googleIcon}
              />
              <Text style={styles.loginWithGoogleText}>Login with Google</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.dontHaveAccountContainer}>
            <Text style={styles.dontHaveAccount}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.signUp}> Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 16,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  formContainer: {
    width: '100%',
  },
  forgotPassword: {
    marginTop: 6,
    textAlign: 'right',
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: Colors.quaternary,
  },

  loginWithGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 7,
  },
  googleIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  loginWithGoogleText: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
    color: Colors.black,
    marginLeft: 10,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 42,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.lightBlack,
  },
  orText: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: Colors.lightBlack2,
    marginHorizontal: 31,
  },
  dontHaveAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dontHaveAccount: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center',
    color: Colors.lightBlack2,
  },
  signUp: {
    color: Colors.quaternary,
    fontSize: 14,
    lineHeight: 16,
  },
});
