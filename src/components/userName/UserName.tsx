import {View, Text, Image} from 'react-native';
import React from 'react';
import {UserNameProps} from '../../types/types';
import styles from './UserNameStyles';
import {lock} from '../../constants/Images';

export default function UserName({username}: UserNameProps) {
  return (
    <View style={[styles.nameContainer, styles.childMargin]}>
      <Image source={lock} style={styles.lock} />
      <Text style={styles.name}>{username}</Text>
    </View>
  );
}
