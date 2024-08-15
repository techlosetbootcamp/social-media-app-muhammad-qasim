import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {Colors} from '../../constants/Colors';
interface HorizontalInputProps {
  label: string;
  placeholder: string;
  style?: ViewStyle | TextStyle;
  multiline?: boolean;
}

const HorizontalInput: React.FC<HorizontalInputProps> = ({
  label,
  placeholder,
  style,
  multiline = false,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.textContainer}>
        <TextInput
          placeholder={placeholder}
          style={[styles.textInput, style]}
          multiline={multiline}
        />
      </View>
    </View>
  );
};
export default HorizontalInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    maxWidth: '70%',
    marginStart: 'auto',
    paddingEnd: 15,
  },
  label: {
    padding: 15,
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19,
    color: Colors.darkBlack,
  },
  textInput: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
    width: '100%',
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: Colors.darkBlack,
  },
});
