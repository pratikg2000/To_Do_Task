// navigation/AuthNavigator.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/Auth/SplashScreen';
import OnboardingScreen from '../screens/Auth/OnboardingScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignUpScreen from '../screens/Auth/SignupScreen';
import RecoverEmailScreen from '../screens/Auth/RecoverEmailScreen';
import RecoverOtpScreen from '../screens/Auth/RecoverOtpScreen';
import UpdatePassword from '../screens/Auth/UpdatePassword';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    // initialRouteName="SplashScreen"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="SplashScreen" component={SplashScreen} />
    <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    <Stack.Screen name="RecoverEmailScreen" component={RecoverEmailScreen} />
    <Stack.Screen name="RecoverOtpScreen" component={RecoverOtpScreen} />
    <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
  </Stack.Navigator>
);

export default AuthNavigator;
