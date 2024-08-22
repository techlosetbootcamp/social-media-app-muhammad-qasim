import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import {UserNameProps} from '../../types/types';

export default function UserName({username}: UserNameProps) {
  return (
    <View style={[styles.nameContainer, styles.childMargin]}>
      <Image
        source={require('../../assets/images/lock.png')}
        style={styles.lock}
      />
      <Text style={styles.name}>{username}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  lock: {
    width: 9,
    height: 12,
  },
  name: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 21,
    color: Colors.darkBlack,
  },
  childMargin: {
    marginTop: 11,
    marginBottom: 11,
  },
});
