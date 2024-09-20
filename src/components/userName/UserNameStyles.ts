import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

const styles = StyleSheet.create({
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  lock: {
    width: 9,
    height: 12,
  },
  name: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 21,
    color: COLORS.darkBlack,
  },
  childMargin: {
    marginTop: 11,
    marginBottom: 11,
  },
});

export default styles;
