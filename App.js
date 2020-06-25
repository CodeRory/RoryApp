import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';

import WelcomeScreen from './app/screens/WelcomeScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import LoginScreen from './app/screens/LoginScreen';

import AuthNavigator from './app/navigation/AuthNavigator';

/* const Hola = ({ navigation }) => (
  <View>
    <Text>Hola</Text>  
    <Button title='next' onPress={() => navigation.navigate('AdiosP')} />
  </View>
);

const Adios = () => (
  <View>
    <Text>Adio</Text>  
  </View>
);



const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='HolaP' component={Hola} />
    <Stack.Screen name='AdiosP' component={Adios}/> 
  </Stack.Navigator>
) */



export default function App() {
  
  
  
  return (
    <NavigationContainer>
      <AuthNavigator />
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
