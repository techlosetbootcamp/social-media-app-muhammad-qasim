import {TextInput} from 'react-native';
import React from 'react';
import styles from './InputStyles';
import {TextInputProps} from '../../types/types';
import {COLORS} from '../../constants/Colors';

const Input: React.FC<TextInputProps> = ({placeholder, ...props}) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      placeholderTextColor={COLORS.lightBlack}
      {...props}
    />
  );
};

export default Input;
