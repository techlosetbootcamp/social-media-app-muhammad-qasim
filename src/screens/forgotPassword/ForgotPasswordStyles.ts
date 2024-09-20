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
  },

  forgotPassword: {
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16,
    color: COLORS.lightBlack2,
    paddingHorizontal: 14,
    marginBottom: 93,
  },
});

export default styles;
