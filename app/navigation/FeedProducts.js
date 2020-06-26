import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProductsScreen from '../screens/ProductsScreen';
import ProductsScreenDetails from '../screens/ProductsScreenDetails';


const Stack = createStackNavigator();

const FeedProducts = () => (
    <Stack.Navigator>
        <Stack.Screen name='Products' component={ProductsScreen} />
        <Stack.Screen name='ProductsScreenDetails' component={ProductsScreenDetails} />
    </Stack.Navigator>


)

export default FeedProducts;
