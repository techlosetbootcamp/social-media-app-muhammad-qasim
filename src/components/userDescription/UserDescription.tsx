import {Text} from 'react-native';
import React from 'react';
import {UserDescriptionProps} from '../../types/types';
import styles from './UserDescriptionStyles';

export default function UserDescription({name, bio}: UserDescriptionProps) {
  return (
    <>
      <Text style={styles.profileName}>{name}</Text>
      <Text style={styles.profileDesc}>{bio}</Text>
    </>
  );
}
