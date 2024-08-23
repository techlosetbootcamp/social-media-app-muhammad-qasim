import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

const styles = StyleSheet.create({
  gridSection: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: Colors.grey,
    padding: 8,
    borderTopColor: Colors.lightGrey,
    borderTopWidth: 1,
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
  },
  grid: {
    width: 25,
    height: 25,
  },
});

export default styles;
