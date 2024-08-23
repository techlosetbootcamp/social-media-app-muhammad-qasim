import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

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

export default styles;
