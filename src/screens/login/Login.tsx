import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Logo from '../../components/logo/Logo';
import GoBack from '../../components/goBack/GoBack';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import styles from './LoginStyles';
import {useLogin} from './useLogin';
import Loader from '../../components/loader/Loader';
import {GOOGLEICON} from '../../constants/Images';
import useTypeNavigation from '../../hooks/useTypeNavigationHook';
import {LOGIN} from '../../constants/InputFields';

const Login = () => {
  const navigation = useTypeNavigation();
  const {handleChange, login, user, identifier, password} = useLogin();
  const fields = LOGIN({identifier, password});

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
              {fields?.map(field => (
                <Input
                  key={field?.key}
                  placeholder={field?.placeholder}
                  secureTextEntry={field?.secureTextEntry || false}
                  onChangeText={(text: string) =>
                    handleChange(field?.key, text)
                  }
                  value={field?.value}
                />
              ))}
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPassword')}
                style={styles.touchableArea}>
                <Text style={styles.forgotPassword}>Forgot password?</Text>
              </TouchableOpacity>
              <Button style={{marginVertical: 30}} onPress={login}>
                <Loader userStatus={user.status} text="Login" />
              </Button>
              <TouchableOpacity style={styles.loginWithGoogle}>
                <Image source={GOOGLEICON} style={styles.googleIcon} />
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
