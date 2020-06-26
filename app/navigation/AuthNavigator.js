import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import { MaterialIcons } from '@expo/vector-icons';

import ProductsScreen from '../screens/ProductsScreen';
import AddProduct from '../screens/AddProduct';
import MyAccount from '../screens/MyAccount';
import colors from '../config/colors';



const Tab = createBottomTabNavigator();
const TabNavigator = () => (
    <Tab.Navigator 
        tabBarOptions={{
            activeBackgroundColor: colors.primary,
            activeTintColor: colors.white,
            headerShown: false

        }}>
        <Tab.Screen name='Products' component={ProductsScreen} options={{
            tabBarIcon: ()=> <MaterialCommunityIcons name="guitar-acoustic" size={24} color="black" />}} />
        <Tab.Screen name='Add' component={AddProduct} options={{
            tabBarIcon: ()=> <MaterialIcons name="add-circle-outline" size={24} color="black" />}}/>
        <Tab.Screen name='My Account' component={MyAccount} options={{
            tabBarIcon: ()=> <MaterialCommunityIcons name="account-circle" size={24} color="black" />}}/>
    
    </Tab.Navigator>


)

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false}} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Products' component={TabNavigator} options={{ headerShown: false}} />
    
    
    </Stack.Navigator>

)

export default AuthNavigator;