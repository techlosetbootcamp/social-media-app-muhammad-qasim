import {View, Image} from 'react-native';
import React from 'react';
import styles from './GridStyles';
import {grid} from '../../constants/Images';

export default function Grid() {
  return (
    <View style={styles.gridSection}>
      <Image source={grid} style={styles.grid} />
    </View>
  );
}
