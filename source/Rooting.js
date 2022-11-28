import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import AddAccount from './components/AddAccount';

export default function Rooting() {

    const Stack = createStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            
                name='LoginScreen'
                component={LoginScreen}
                options = {{
                    headerShown: false,
                }}

            />
            <Stack.Screen
            
            name='HomeScreen'
            component={HomeScreen}
            options = {{
                headerShown: false,
            }}

        />
             <Stack.Screen
            
            name='AddAccount'
            component={AddAccount}
            options = {{
                headerShown: false,
            }}

        />
        </Stack.Navigator>
    </NavigationContainer>
  )
}