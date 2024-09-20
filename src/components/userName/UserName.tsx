import {View, Text, Image} from 'react-native';
import React from 'react';
import {UserNameProps} from '../../types/types';
import styles from './UserNameStyles';
import {LOCK} from '../../constants/Images';

export default function UserName({username}: UserNameProps) {
  return (
    <View style={[styles.nameContainer, styles.childMargin]}>
      <Image source={LOCK} style={styles.lock} />
      <Text style={styles.name}>{username}</Text>
    </View>
  );
}
