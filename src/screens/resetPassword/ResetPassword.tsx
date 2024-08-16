import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Logo from '../../components/logo/Logo';
import Backward from '../../components/backward/Backward';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import {Colors} from '../../constants/Colors';
import {useResetPassword} from './useResetPassword';

const ResetPassword = () => {
  const {
    setOldPassword,
    setNewPassword,
    setConfirmPassword,
    resetPasswordHandler,
    user,
    error,
  } = useResetPassword();
  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      keyboardShouldPersistTaps="handled">
      <View style={styles.main}>
        <Backward />
        <View style={styles.container}>
          <Logo marginBottom={95} marginTop={80} />
          <Input
            placeholder="Old Password"
            secureTextEntry={true}
            onChangeText={setOldPassword}
          />
          <Input
            placeholder="New Password"
            secureTextEntry={true}
            onChangeText={setNewPassword}
          />
          <Input
            placeholder="Confirm Password"
            secureTextEntry={true}
            onChangeText={setConfirmPassword}
          />
          <Button
            text="Reset Password"
            marginVertical={40}
            onPress={resetPasswordHandler}
          />
          {error && <Text>{error}</Text>}
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
