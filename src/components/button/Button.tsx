import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import {ButtonProps} from '../../types/types';

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

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    backgroundColor: Colors.quaternary,
    borderRadius: 6,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default Button;
