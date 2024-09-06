import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Logo from '../../components/logo/Logo';
import GoBack from '../../components/goBack/GoBack';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import styles from './LoginStyles';
import {useLogin} from './useLogin';
import Loader from '../../components/loader/Loader';
import {googleIcon} from '../../constants/Images';
import useTypeNavigation from '../../hooks/useTypeNavigationHook';

const Login = () => {
  const navigation = useTypeNavigation();
  const {identifier, password, handleChange, login, user} = useLogin();

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
            <Logo marginBottom={39} marginTop={80} />
            <View style={styles.formContainer}>
              <Input
                placeholder="Email/Username"
                onChangeText={(text: string) =>
                  handleChange('identifier', text)
                }
                value={identifier}
              />
              <Input
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text: string) => handleChange('password', text)}
                value={password}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPassword')}
                style={styles.touchableArea}>
                <Text style={styles.forgotPassword}>Forgot password?</Text>
              </TouchableOpacity>
              <Button style={{marginVertical: 30}} onPress={login}>
                <Loader userStatus={user.status} text="Login" />
              </Button>
              <TouchableOpacity style={styles.loginWithGoogle}>
                <Image source={googleIcon} style={styles.googleIcon} />
                <Text style={styles.loginWithGoogleText}>
                  Login with Google
                </Text>
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
    </View>
  );
};

export default Login;
