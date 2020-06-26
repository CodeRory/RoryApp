import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';

import WelcomeScreen from './app/screens/WelcomeScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import LoginScreen from './app/screens/LoginScreen';
import ProductsScreen from './app/screens/ProductsScreen';

import AuthNavigator from './app/navigation/AuthNavigator';

import MyAccount from './app/screens/MyAccount';





export default function App() {
  
  
  
  return (
    <NavigationContainer>

     
      <MyAccount />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
