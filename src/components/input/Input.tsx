import {TextInput, useColorScheme} from 'react-native';
import React from 'react';
import styles from './InputStyles';
import {TextInputProps} from '../../types/types';
import {COLORS} from '../../constants/Colors';

const Input: React.FC<TextInputProps> = ({placeholder, ...props}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const textColor = isDarkMode ? COLORS.white : COLORS.black;
  const placeholderColor = isDarkMode ? COLORS.white : COLORS.lightBlack;

  return (
    <TextInput
      style={[styles.textInput, {color: textColor}]}
      placeholder={placeholder}
      placeholderTextColor={placeholderColor}
      {...props}
    />
  );
};

export default Input;
