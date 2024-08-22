import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Logo from '../../components/logo/Logo';
import Backward from '../../components/backward/Backward';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import {Colors} from '../../constants/Colors';
import {useResetPassword} from './useResetPassword';
import Loader from '../../components/loader/Loader';
import auth from '@react-native-firebase/auth';

const ResetPassword = () => {
  const {
    setOldPassword,
    setNewPassword,
    setConfirmPassword,
    resetPasswordHandler,
    oldPassword,
    newPassword,
    confirmPassword,
    user,
  } = useResetPassword();
  const logoutHandler = () => {
    auth()
      .signOut()
      .then(() => console.log('logged out'))
      .catch(err => console.log(err));
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      keyboardShouldPersistTaps="handled">
      <View style={styles.main}>
        <Button text="logout" onPress={logoutHandler} />
        <Backward />
        <View style={styles.container}>
          <Logo marginBottom={95} marginTop={80} />
          <Input
            placeholder="Old Password"
            secureTextEntry={true}
            onChangeText={setOldPassword}
            value={oldPassword}
          />
          <Input
            placeholder="New Password"
            secureTextEntry={true}
            onChangeText={setNewPassword}
            value={newPassword}
          />
          <Input
            placeholder="Confirm Password"
            secureTextEntry={true}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />
          <Button style={{marginVertical: 40}} onPress={resetPasswordHandler}>
            <Loader userStatus={user.status} text="Reset Password" />
          </Button>
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
