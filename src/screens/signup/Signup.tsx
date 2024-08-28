import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Logo from '../../components/logo/Logo';
import Backward from '../../components/backward/Backward';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import styles from './SignupStyles';
import {useSignup} from './useSignup';
import Loader from '../../components/loader/Loader';
import {googleIcon} from '../../constants/Images';
import useTypeNavigation from '../../hooks/useTypeNavigationHook';

const Signup = () => {
  const navigation = useTypeNavigation();
  const {
    setUserName,
    setEmail,
    setPassword,
    setConfirmPassword,
    handleSignup,
    userName,
    email,
    password,
    confirmPassword,
    user,
  } = useSignup();

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
            <Logo marginBottom={39} marginTop={80} />
            <View style={styles.formContainer}>
              <Input
                placeholder="Username"
                onChangeText={setUserName}
                value={userName}
              />
              <Input
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
              />
              <Input
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={setPassword}
                value={password}
              />
              <Input
                placeholder="Confirm Password"
                secureTextEntry={true}
                onChangeText={setConfirmPassword}
                value={confirmPassword}
              />
              <Button style={{marginVertical: 28}} onPress={handleSignup}>
                <Loader userStatus={user.status} text="Signup" />
              </Button>
              <TouchableOpacity style={styles.loginWithGoogle}>
                <Image source={googleIcon} style={styles.googleIcon} />
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
