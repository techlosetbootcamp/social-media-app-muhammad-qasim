import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';

const PictureOutline: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
  return <View style={styles.profileOutline}>{children}</View>;
};

export default PictureOutline;

const styles = StyleSheet.create({
  profileOutline: {
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: 96,
    height: 96,
    marginBottom: 14,
  },
});
