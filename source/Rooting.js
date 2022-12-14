import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Screens/LoginScreen'
import HomeTab from './HomeTab';
import AddTicketScreen from './Screens/AddTicketScreen';
import AddAccount from './components/AddAccount';
import SearchScreen from './Screens/SearchScreen';

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
            
                name='HomeTab'
                component={HomeTab}
                options = {{
                    headerShown: false,
                }}

            />
            <Stack.Screen
            
                name = 'AddTicketScreen'
                component={AddTicketScreen}
                options = {{
                    headerShown: false
                }}

            />
            <Stack.Screen
            
                name='AddAccount'
                component={AddAccount}
                options = {{
                    headerShown: false,
                }}

            />
            <Stack.Screen
            
                name = 'SearchScreen'
                component={SearchScreen}
                options = {{
                    headerShown: false,
                }}


            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}