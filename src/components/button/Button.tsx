import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import {ButtonProps} from '../../types/types';

const Button = ({
  text,
  onPress,
  marginVertical = 30,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, {marginVertical}]}
      onPress={onPress}
      {...props}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    backgroundColor: Colors.quaternary,
    borderRadius: 6,
    width: '100%',
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
