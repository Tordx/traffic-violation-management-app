import {BackHandler, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import  Icon from 'react-native-vector-icons/MaterialIcons'
import TicketingScreen from './Screens/NavigationScreens/TicketingScreen'
import AccountScreen from './Screens/NavigationScreens/AccountScreen'
import NewsScreen from './Screens/NavigationScreens/NewsScreen'


export default function HomeTab() {

  

  const Tab = createBottomTabNavigator();

      
      useEffect(() => {
        
    
        const backAction = () => {
          Alert.alert("Hold on!", "Are you sure you want to go Exit the App?", [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
          ]);
          return true;
        };
  
        const handler = BackHandler.addEventListener('hardwareBackPress', backAction);
        return () => handler.remove();
      },[])
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