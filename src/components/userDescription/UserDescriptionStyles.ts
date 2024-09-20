import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

const styles = StyleSheet.create({
  profileName: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: COLORS.darkBlack,
  },
  profileDesc: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 17,
    color: COLORS.darkBlack,
    textAlign: 'center',
    marginTop: 1,
    maxWidth: '70%',
  },
});

export default styles;
