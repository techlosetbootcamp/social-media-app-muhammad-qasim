import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Logo from '../../components/logo/Logo';
import Backward from '../../components/backward/Backward';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import styles from './ForgotPasswordStyles';
import {useForgotPassword} from './useForgotPassword';
import Loader from '../../components/loader/Loader';

const ForgotPassword = () => {
  const {setEmail, forgotPasswordHandler, email, user} = useForgotPassword();
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Backward />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled">
        <View style={styles.main}>
          <View style={styles.container}>
            <Logo marginBottom={24} marginTop={80} />
            <Text style={styles.forgotPassword}>
              Forgot your password? Write your email and we will send you a
              magic link to reset your password.
            </Text>
            <Input placeholder="Email" onChangeText={setEmail} value={email} />
            <Button
              style={{marginVertical: 24}}
              onPress={forgotPasswordHandler}>
              <Loader userStatus={user.status} text="Send Magic Link" />
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ForgotPassword;
