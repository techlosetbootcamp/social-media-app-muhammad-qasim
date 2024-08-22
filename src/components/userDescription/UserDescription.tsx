import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import {UserDescriptionProps} from '../../types/types';

export default function UserDescription({name, bio}: UserDescriptionProps) {
  return (
    <>
      <Text style={styles.profileName}>{name}</Text>
      <Text style={styles.profileDesc}>{bio}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  profileName: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: Colors.darkBlack,
  },
  profileDesc: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 17,
    color: Colors.darkBlack,
    textAlign: 'center',
    marginTop: 1,
    maxWidth: '70%',
  },
});
