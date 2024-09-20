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
});

export default styles;
