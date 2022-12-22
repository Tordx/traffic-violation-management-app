import {BackHandler, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import  Icon from 'react-native-vector-icons/MaterialIcons'
import TicketingScreen from './Screens/NavigationScreens/TicketingScreen'
import AccountScreen from './Screens/NavigationScreens/AccountScreen'
import NewsScreen from './Screens/NavigationScreens/NewsScreen'


export default function HomeTab() {

      useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
        return () => backHandler.remove()
      }, [])

    const Tab = createBottomTabNavigator();

  return (

    <Tab.Navigator
    initialRouteName='Ticketing'
    screenOptions={({route}) => ({
      
        tabBarLabelStyle: {

          bottom: 3,
          fontSize: 10,
          color: '#1240ac'

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
              color = focused ? '#1240ac': '#c1cde0'; 

            } else if (route.name === 'News') {
                iconName = 'announcement';
                size = focused ? 35 : 32;
                color = focused ? '#1240ac': '#c1cde0'; 
  
            } else if (route.name === 'Account') {
              iconName = 'account-circle';
              size = focused ? 35 : 32;
              color = focused ? '#1240ac': '#c1cde0'; 

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

  )
}