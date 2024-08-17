import {Text, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import {LoaderProps} from '../../types/types';

export default function Loader({userStatus, text}: LoaderProps) {
  return (
    <>
      {userStatus === 'loading' ? (
        <ActivityIndicator size="small" color={Colors.white} />
      ) : (
        <Text style={styles.buttonText}>{text}</Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
    color: Colors.white,
    textAlign: 'center',
  },
});
