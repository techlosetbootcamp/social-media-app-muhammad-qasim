import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Logo from '../../components/logo/Logo';
import GoBack from '../../components/goBack/GoBack';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import styles from './SignupStyles';
import {useSignup} from './useSignup';
import Loader from '../../components/loader/Loader';
import {GOOGLE_ICON} from '../../constants/Images';
import useTypeNavigation from '../../hooks/useTypeNavigationHook';
import {SIGNUP} from '../../constants/InputFields';

const Signup = () => {
  const navigation = useTypeNavigation();
  const {
    handleChange,
    handleSignup,
    user,
    userName,
    email,
    password,
    confirmPassword,
  } = useSignup();
  const fields = SIGNUP({userName, email, password, confirmPassword});
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
              <Button style={{marginVertical: 28}} onPress={handleSignup}>
                <Loader userStatus={user?.status} text="Signup" />
              </Button>
              <TouchableOpacity style={styles.loginWithGoogle}>
                <Image source={GOOGLE_ICON} style={styles.googleIcon} />
                <Text style={styles.loginWithGoogleText}>
                  Signup with Google
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.orContainer}>
              <View style={styles.line} />
              <Text style={styles.orText}>OR</Text>
              <View style={styles.line} />
            </View>
            <View style={styles.haveAccountContainer}>
              <Text style={styles.haveAccount}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.login}> Log In.</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Signup;
