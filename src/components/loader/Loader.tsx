import {Text, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './LoaderStyles';
import {COLORS} from '../../constants/Colors';
import {LoaderProps} from '../../types/types';

export default function Loader({userStatus, text}: LoaderProps) {
  return (
    <>
      {userStatus === 'loading' ? (
        <ActivityIndicator size="small" color={COLORS.white} />
      ) : (
        <Text style={styles.buttonText}>{text}</Text>
      )}
    </>
  );
}
