import {TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import {TextInputProps} from '../../types/types';

const Input: React.FC<TextInputProps> = ({placeholder, ...props}) => {
  return (
    <TextInput style={styles.textInput} placeholder={placeholder} {...props} />
  );
};

export default Input;

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: Colors.lightGrey,
    backgroundColor: Colors.grey,
    borderRadius: 6,
    padding: 15,
    marginBottom: 12,
  },
});
