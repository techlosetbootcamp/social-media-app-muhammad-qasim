import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

const styles = StyleSheet.create({
  gridSection: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: COLORS.grey,
    padding: 8,
    borderTopColor: COLORS.lightGrey,
    borderTopWidth: 1,
    borderBottomColor: COLORS.black,
    borderBottomWidth: 1,
  },
  grid: {
    width: 25,
    height: 25,
  },
});

export default styles;
