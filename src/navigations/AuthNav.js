import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';

const AuthStack = createStackNavigator();

const AuthNav = () => (
  <AuthStack.Navigator
    screenOptions={{ headerShown: false, gestureEnabled: false }} >
    <AuthStack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
  </AuthStack.Navigator>
);

export default AuthNav;
