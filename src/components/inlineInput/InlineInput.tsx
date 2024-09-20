import React from 'react';
import {View, Text, TextInput, useColorScheme} from 'react-native';
import {InlineInputProps} from '../../types/types';
import styles from './InlineInputStyles';
import {Colors} from '../../constants/Colors';

const InlineInput: React.FC<InlineInputProps> = ({
  label,
  placeholder,
  style,
  value,
  onChangeText,
  disabled,
  multiline = false,
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const textColor = isDarkMode ? Colors.white : Colors.black;
  const placeholderColor = isDarkMode ? Colors.white : Colors.lightBlack;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.textContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          style={[styles.textInput, style, {color: textColor}]}
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
