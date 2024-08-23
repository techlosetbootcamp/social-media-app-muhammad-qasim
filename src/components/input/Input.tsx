import {TextInput} from 'react-native';
import React from 'react';
import styles from './InputStyles';
import {TextInputProps} from '../../types/types';

const Input: React.FC<TextInputProps> = ({placeholder, ...props}) => {
  return (
    <TextInput style={styles.textInput} placeholder={placeholder} {...props} />
  );
};

export default Input;
