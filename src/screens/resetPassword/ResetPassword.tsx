import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Logo from '../../components/logo/Logo';
import Backward from '../../components/backward/Backward';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import {Colors} from '../../constants/Colors';

const ResetPassword = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      keyboardShouldPersistTaps="handled">
      <View style={styles.main}>
        <Backward />
        <View style={styles.container}>
          <Logo marginBottom={95} />
          <Input placeholder="Old Password" />
          <Input placeholder="New Password" />
          <Input placeholder="Confirm Password" />
          <Button text="Reset Password" marginVertical={40} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ResetPassword;

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
});
