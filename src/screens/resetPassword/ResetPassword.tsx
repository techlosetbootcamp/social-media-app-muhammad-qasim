import {View, ScrollView} from 'react-native';
import React from 'react';
import Logo from '../../components/logo/Logo';
import Backward from '../../components/backward/Backward';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import styles from './ResetPasswordStyles';
import {useResetPassword} from './useResetPassword';
import Loader from '../../components/loader/Loader';

const ResetPassword = () => {
  const {
    setOldPassword,
    setNewPassword,
    setConfirmPassword,
    resetPasswordHandler,
    user,
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
          <Button style={{marginVertical: 40}} onPress={resetPasswordHandler}>
            <Loader userStatus={user.status} text="Reset Password" />
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default ResetPassword;
