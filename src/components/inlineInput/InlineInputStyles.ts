import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    maxWidth: '70%',
    marginStart: 'auto',
    paddingEnd: 15,
  },
  label: {
    padding: 15,
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19,
    color: COLORS.darkBlack,
  },
  textInput: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGrey,
    width: '100%',
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: COLORS.darkBlack,
  },
});

export default styles;
