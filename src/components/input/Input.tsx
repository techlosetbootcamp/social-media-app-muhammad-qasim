import {TextInput, useColorScheme} from 'react-native';
import React from 'react';
import styles from './InputStyles';
import {TextInputProps} from '../../types/types';
import {Colors} from '../../constants/Colors';

const Input: React.FC<TextInputProps> = ({placeholder, ...props}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const textColor = isDarkMode ? Colors.white : Colors.black;
  const placeholderColor = isDarkMode ? Colors.white : Colors.lightBlack;

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
