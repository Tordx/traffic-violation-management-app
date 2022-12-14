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
      
        tabBarLabelStyle: {

          bottom: 3,
          fontSize: 10,

        },
        tabBarStyle: { 
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: 65,
            backgroundColor: '#fff',

        },
        tabBarIcon:({focused, size, color}) => {
          let iconName;
            if(route.name==='Ticketing'){
              iconName = 'article';
              size = focused ? 35 : 32;
              color = focused ? '#1240ac': 'grey'; 

            } else if (route.name === 'News') {
                iconName = 'announcement';
                size = focused ? 35 : 32;
                color = focused ? '#1240ac': 'grey'; 
  
            } else if (route.name === 'Account') {
              iconName = 'account-circle';
              size = focused ? 35 : 32;
              color = focused ? '#1240ac': 'grey'; 

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

            name = 'Ticketing' 
            component={TicketingScreen}
            options = {{headerShown: false}}
        />
        
        <Tab.Screen

            name = 'News' 
            component={NewsScreen}
            options = {{headerShown: false}}
        
        />
        <Tab.Screen

            name = 'Account' 
            component={AccountScreen}
            options = {{headerShown: false}}
        
        />
    </Tab.Navigator>
    </>

  )
}