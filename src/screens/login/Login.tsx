import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      keyboardShouldPersistTaps="handled">
      <View style={styles.main}>
        <Image source={require('../../assets/images/back.png')} />

        <View style={styles.container}>
          <Image
            style={styles.logoImage}
            source={require('../../assets/images/instagramLogo.png')}
          />
          <View style={styles.formContainer}>
            <TextInput style={styles.textInput} placeholder="Email" />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry
            />
            <Text style={styles.forgotPassword}>Forgot password?</Text>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
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
          <Text style={styles.dontHaveAccount}>
            Don't have an account? <Text style={styles.signUp}>Sign up</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
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

  logoImage: {
    marginBottom: 39,
    width: 164,
    height: 49,
    resizeMode: 'contain',
  },
  formContainer: {
    width: '100%',
  },
  textInput: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#0000001A',
    backgroundColor: '#FAFAFA',
    borderRadius: 6,
    padding: 15,
    marginBottom: 12,
  },
  forgotPassword: {
    marginTop: 6,
    textAlign: 'right',
    fontFamily: 'Roboto-Regular',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: '#3797EF',
  },
  loginButton: {
    marginVertical: 30,
    paddingVertical: 14,
    backgroundColor: '#3797EF',
    borderRadius: 6,
  },
  loginButtonText: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17,
    color: 'white',
    textAlign: 'center',
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
    fontFamily: 'Roboto-Regular',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17,
    color: '#000000',
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
    backgroundColor: '#00000033',
  },
  orText: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 14,
    color: '#00000066',
    marginHorizontal: 31,
  },
  dontHaveAccount: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center',
    color: '#00000066',
  },
  signUp: {
    color: '#3797EF',
  },
});
