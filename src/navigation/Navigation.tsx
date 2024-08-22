import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login/Login';
import Signup from '../screens/signup/Signup';
import ForgotPassword from '../screens/forgotPassword/ForgotPassword';
import Profile from '../screens/profile/Profile';
import ProfileEdit from '../screens/profileEdit/ProfileEdit';
import ResetPassword from '../screens/resetPassword/ResetPassword';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Posts from '../screens/posts/Posts';
import UploadImage from '../screens/uploadImage/UploadImage';
import {Image, View} from 'react-native';
import ProfilePicture from '../components/profilePicture/ProfilePicture';
import {Colors} from '../constants/Colors';
import AuthNavigation from './AuthNavigation';
import OtherUserProfile from '../screens/otherUserProfile/OtherUserProfile';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Navigation() {
  const userData = AuthNavigation();
  const isAuthenticated =
    userData && userData?.displayName && userData?.email && userData?.uid;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="Home" component={BottomTabNavigator} />
            <Stack.Screen
              name="OtherUserProfile"
              component={OtherUserProfile}
            />
            <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function BottomTabNavigator() {
  const userData = AuthNavigation();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          if (route.name === 'Profile') {
            return (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: Colors.darkBlack,
                  borderRadius: 50,
                  width: 27,
                  height: 27,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <ProfilePicture
                  width={24}
                  height={24}
                  imageUri={userData?.photoURL}
                />
              </View>
            );
          }

          let iconName;

          if (route.name === 'Posts') {
            iconName = require('../assets/images/home.png');
          } else if (route.name === 'UploadImage') {
            iconName = require('../assets/images/uploadPage.png');
          }

          return (
            <Image
              source={iconName}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? Colors.darkBlack : Colors.black,
              }}
            />
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 50,
          display: route.name === 'UploadImage' ? 'none' : 'flex',
        },
      })}>
      <Tab.Screen name="Posts" component={Posts} />
      <Tab.Screen name="UploadImage" component={UploadImage} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
