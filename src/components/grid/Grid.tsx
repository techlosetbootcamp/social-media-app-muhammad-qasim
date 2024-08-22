import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';

export default function Grid() {
  return (
    <View style={styles.gridSection}>
      <Image
        source={require('../../assets/images/grid.png')}
        style={styles.grid}
      />
    </View>
  );
}

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
