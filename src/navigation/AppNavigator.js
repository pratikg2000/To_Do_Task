// navigation/AppNavigator.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import ProductDetailScreen from '../screens/Home/ProductDetailScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import CartScreen from '../screens/Cart/CartScreen';
import SplashScreen from '../screens/Auth/SplashScreen';
import ProductList from '../screens/Home/ProductList';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="ProductList" component={ProductList} />
    <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
    <Stack.Screen name="Cart" component={CartScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
