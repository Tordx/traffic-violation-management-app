import React from 'react'
import { Provider } from 'react-redux';
import store from './Redux/Store';

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Screens/LoginScreen'
import HomeTab from './HomeTab';
import AddTicketScreen from './Screens/AddTicketScreen';
import AddAccount from './components/AddAccount';
import SearchScreen from './Screens/SearchScreen';
import SplashScreen from './Screens/SplashScreen';
import ForgotPasswordScreen from './Screens/ForgotPasswordScreen';
import UserSettingScreen from './Screens/UserSettingScreen';
import TicketScreen from './Screens/TicketScreen';

export default function Rooting() {

    const Stack = createStackNavigator();

  return (
    <Provider store={store}>
    <NavigationContainer>
        <Stack.Navigator initialRouteName='SplashScreen'>

            <Stack.Screen
            
                name='SplashScreen'
                component={SplashScreen}
                options = {{
                    headerShown: false,
                }}

            />

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

            <Stack.Screen
            
                name = 'ForgotPasswordScreen'
                component={ForgotPasswordScreen}
                options = {{
                    headerShown: false,
                }}
            />

            <Stack.Screen
            
                name = 'UserSettingScreen'
                component={UserSettingScreen}
                options = {{
                    headerShown: false,
                }}
            
            />

            <Stack.Screen
            
                name = 'TicketScreen'
                component={TicketScreen}
                options = {{
                    headerShown: false,
                }}
            
            />
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}