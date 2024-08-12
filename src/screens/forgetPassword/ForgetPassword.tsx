import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Logo from '../../components/logo/Logo';
import Backward from '../../components/backward/Backward';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import {Colors} from '../../constants/Colors';

const ForgetPassword = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      keyboardShouldPersistTaps="handled">
      <View style={styles.main}>
        <Backward />
        <View style={styles.container}>
          <Logo marginBottom={24} />
          <Text style={styles.forgotPassword}>
            Forgot your password? write your email and we will send you a magic
            link to reset your passwod
          </Text>
          <Input placeholder="Email" />
          <Button text="Send Magic Link" marginVertical={24} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  main: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 16,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  forgotPassword: {
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16,
    color: Colors.lightBlack2,
    paddingHorizontal: 14,
    marginBottom: 93,
  },
});
