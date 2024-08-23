import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Logo from '../../components/logo/Logo';
import Backward from '../../components/backward/Backward';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import styles from './LoginStyles';
import {useLogin} from './useLogin';
import Loader from '../../components/loader/Loader';
import {googleIcon} from '../../constants/Images';

const Login = ({navigation}: any) => {
  const {setIdentifier, setPassword, identifier, password, login, user} =
    useLogin();

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      keyboardShouldPersistTaps="handled">
      <View style={styles.main}>
        <Backward />
        <View style={styles.container}>
          <Logo marginBottom={39} marginTop={80} />
          <View style={styles.formContainer}>
            <Input
              placeholder="Email/Username"
              onChangeText={setIdentifier}
              value={identifier}
            />
            <Input
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={setPassword}
              value={password}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>
            <Button style={{marginVertical: 30}} onPress={login}>
              <Loader userStatus={user.status} text="Login" />
            </Button>
            <TouchableOpacity style={styles.loginWithGoogle}>
              <Image source={googleIcon} style={styles.googleIcon} />
              <Text style={styles.loginWithGoogleText}>Login with Google</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.dontHaveAccountContainer}>
            <Text style={styles.dontHaveAccount}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.signUp}> Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
