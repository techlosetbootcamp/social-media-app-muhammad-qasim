import {View, ScrollView} from 'react-native';
import React from 'react';
import Logo from '../../components/logo/Logo';
import GoBack from '../../components/goBack/GoBack';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import styles from './ResetPasswordStyles';
import {useResetPassword} from './useResetPassword';
import Loader from '../../components/loader/Loader';

const ResetPassword = () => {
  const {
    handleChange,
    resetPasswordHandler,
    oldPassword,
    newPassword,
    confirmPassword,
    user,
  } = useResetPassword();
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <GoBack />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled">
        <View style={styles.main}>
          <View style={styles.container}>
            <Logo marginBottom={95} marginTop={80} />
            <Input
              placeholder="Old Password"
              secureTextEntry={true}
              onChangeText={(text: string) => handleChange('oldPassword', text)}
              value={oldPassword}
            />
            <Input
              placeholder="New Password"
              secureTextEntry={true}
              onChangeText={(text: string) => handleChange('newPassword', text)}
              value={newPassword}
            />
            <Input
              placeholder="Confirm Password"
              secureTextEntry={true}
              onChangeText={(text: string) =>
                handleChange('confirmPassword', text)
              }
              value={confirmPassword}
            />
            <Button style={{marginVertical: 40}} onPress={resetPasswordHandler}>
              <Loader userStatus={user.status} text="Reset Password" />
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ResetPassword;
