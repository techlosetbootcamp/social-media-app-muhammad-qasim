import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {InlineInputProps} from '../../types/types';
import styles from './InlineInputStyles';

const InlineInput: React.FC<InlineInputProps> = ({
  label,
  placeholder,
  style,
  value,
  onChangeText,
  disabled,
  multiline = false,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.textContainer}>
        <TextInput
          placeholder={placeholder}
          style={[styles.textInput, style]}
          value={value}
          multiline={multiline}
          onChangeText={onChangeText}
          editable={!disabled}
        />
      </View>
    </View>
  );
};
export default InlineInput;
