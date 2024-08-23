import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {ButtonProps} from '../../types/types';
import styles from './ButtonStyles';

const Button = ({text, onPress, children, style, ...props}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      {...props}>
      {text ? <Text style={styles.buttonText}>{text}</Text> : children}
    </TouchableOpacity>
  );
};

export default Button;
