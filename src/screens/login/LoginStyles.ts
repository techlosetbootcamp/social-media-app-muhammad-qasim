import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    height: 44,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  main: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 16,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    width: '100%',
  },
  touchableArea: {
    alignSelf: 'flex-end',
  },
  forgotPassword: {
    marginTop: 6,
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: COLORS.quaternary,
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
    color: COLORS.black,
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
    backgroundColor: COLORS.lightBlack,
  },
  orText: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: COLORS.lightBlack2,
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
    color: COLORS.lightBlack2,
  },
  signUp: {
    color: COLORS.quaternary,
    fontSize: 14,
    lineHeight: 16,
  },
});

export default styles;
