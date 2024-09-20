import {View, ScrollView} from 'react-native';
import React from 'react';
import Logo from '../../components/logo/Logo';
import GoBack from '../../components/goBack/GoBack';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import styles from './ResetPasswordStyles';
import {useResetPassword} from './useResetPassword';
import Loader from '../../components/loader/Loader';
import {RESET_PASSWORD} from '../../constants/InputFields';

const ResetPassword = () => {
  const {
    handleChange,
    resetPasswordHandler,
    user,
    oldPassword,
    newPassword,
    confirmPassword,
  } = useResetPassword();
  const fields = RESET_PASSWORD({oldPassword, newPassword, confirmPassword});
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
            {fields?.map(field => (
              <Input
                key={field?.key}
                placeholder={field.placeholder}
                secureTextEntry={field.secureTextEntry}
                onChangeText={(text: string) => handleChange(field.key, text)}
                value={field?.value}
              />
            ))}
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
