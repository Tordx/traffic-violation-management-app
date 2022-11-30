import {StatusBar } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import  Icon from 'react-native-vector-icons/MaterialIcons'
import TicketingScreen from './Screens/NavigationScreens/TicketingScreen'
import AccountScreen from './Screens/NavigationScreens/AccountScreen'
import NewsScreen from './Screens/NavigationScreens/NewsScreen'


export default function HomeTab() {

    const Tab = createBottomTabNavigator();

  return (
    <>
    <StatusBar
    backgroundColor="#F4EAE6"
    barStyle="dark-content"
  />
    <Tab.Navigator

    screenOptions={({route}) => ({
        
        tabBarShowLabel: false,
        tabBarStyle: { 
            position: 'absolute',
            bottom: 30,
            left: 30,
            right: 30,
            borderRadius: 10,
            height: 60,
            backgroundColor: '#fff'

        },
        tabBarIcon:({focused, size, color}) => {
          let iconName;
            if(route.name==='TicketingScreen'){
              iconName = 'article';
              size = focused ? 37 : 35;
              color = focused ? '#4297A0': 'grey'; 

            } else if (route.name === 'NewsScreen') {
                iconName = 'announcement';
                size = focused ? 37 : 35;
                color = focused ? '#4297A0': 'grey'; 
  
            } else if (route.name === 'AccountScreen') {
              iconName = 'account-circle';
              size = focused ? 37 : 35;
              color = focused ? '#4297A0': 'grey'; 

            } 

            

              return(
                <Icon 
                    name = {iconName}
                    size={size}
                    color = {color}
                />
              )
        },
        
      
      })
    }

         
    >
        <Tab.Screen

            name = 'TicketingScreen' 
            component={TicketingScreen}
            options = {{headerShown: false}}
        />
        
        <Tab.Screen

            name = 'NewsScreen' 
            component={NewsScreen}
            options = {{headerShown: false}}
        
        />
        <Tab.Screen

            name = 'AccountScreen' 
            component={AccountScreen}
            options = {{headerShown: false}}
        
        />
    </Tab.Navigator>
    </>

  )
}