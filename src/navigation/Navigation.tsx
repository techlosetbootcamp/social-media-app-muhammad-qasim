import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useAuthNavigation from './AuthNavigation';
import {authRoutes, guestRoutes} from '../constants/NavigationRoutes';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const currentUser = useAuthNavigation();
  const isAuthenticated =
    currentUser &&
    currentUser?.displayName &&
    currentUser?.email &&
    currentUser?.uid;

  const routes = isAuthenticated ? authRoutes : guestRoutes;

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      {routes?.map(route => (
        <Stack.Screen
          key={route?.name}
          name={route?.name}
          component={route?.component}
        />
      ))}
    </Stack.Navigator>
  );
}
