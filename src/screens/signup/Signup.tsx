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
import {useSignup} from './useSignup';

const Signup = () => {
  const {
    setUserName,
    setEmail,
    setPassword,
    setConfirmPassword,
    handleSignup,
    user,
    error,
  } = useSignup();

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      keyboardShouldPersistTaps="handled">
      <View style={styles.main}>
        <Backward />
        <View style={styles.container}>
          <Logo marginBottom={39} marginTop={80} />
          <View style={styles.formContainer}>
            <Input placeholder="Username" onChangeText={setUserName} />
            <Input placeholder="Email" onChangeText={setEmail} />
            <Input
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={setPassword}
            />
            <Input
              placeholder="Confirm Password"
              secureTextEntry={true}
              onChangeText={setConfirmPassword}
            />
            <Button text="Signup" marginVertical={28} onPress={handleSignup} />
            {error && <Text>{error}</Text>}
            <TouchableOpacity style={styles.loginWithGoogle}>
              <Image
                source={require('../../assets/images/googleIcon.png')}
                style={styles.googleIcon}
              />
              <Text style={styles.loginWithGoogleText}>Signup with Google</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
          </View>
          <Text style={styles.dontHaveAccount}>
            Already have an account? <Text style={styles.signUp}>Log In.</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;

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

  loginWithGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 9,
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
  },
});
