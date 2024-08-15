import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';

const GridSection = () => {
  return (
    <View style={styles.gridSection}>
      <Image
        source={require('../../assets/images/grid.png')}
        style={styles.grid}
      />
    </View>
  );
};

export default GridSection;

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
