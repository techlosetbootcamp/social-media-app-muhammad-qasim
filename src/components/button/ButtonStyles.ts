import {Colors} from '../../constants/Colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    backgroundColor: Colors.quaternary,
    borderRadius: 6,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default styles;
