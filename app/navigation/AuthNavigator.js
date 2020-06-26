import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

import ProductsScreen from '../screens/ProductsScreen';
import AddProduct from '../screens/AddProduct';
import MyAccount from '../screens/MyAccount';



const Tab = createBottomTabNavigator();
const TabNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name='Products' />
        <Tab.Screen name='Add' />
        <Tab.Screen name='My Account' />
    
    </Tab.Navigator>


)

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false}} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Products' component={TabNavigator} />
    
    
    </Stack.Navigator>

)

export default AuthNavigator;