import { View, Text, Pressable, StyleSheet, Image, Alert } from 'react-native'
import React from 'react'
import  Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'


export default function AccountScreen() {

  const navigation = useNavigation()

  const logout = () => 

  Alert.alert(
    "Confirm Log out",
    "Are you sure you want to logout from device?",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "Confirm", onPress: () => navigation.navigate('LoginScreen') },
      
    ]
  );


  return (
    
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style = {styles.HeaderContainer} >
        <View style = {{
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        }}>
      <Text style = {{textAlign: 'center', fontSize: 20, fontWeight: '500', color: '#fff'}}>Account</Text>
      </View>
      <Pressable style={{right: 0, position: 'absolute', margin: 10, bottom: 5,}}
        onPress = {logout}
        >
        <Icon
        name='logout'
        size={30}
        color = '#fff'
        />
      </Pressable>
      </View>
      
      <View style = {{justifyContent: 'center', alignItems: 'center'}}>
        <Image
        
        source={require('../../Assets/Images/sample_officer.png')}
        style = {styles.profileimage}

        />

        <Text style = {styles.officername} >Juan Dela Cruz</Text>
      <View>
        <Image/>
        <Text style={styles.officerrank}>Police Officer I</Text>
      </View>

      </View>

      {/* <Pressable style={styles.AddUser} > 
            <Icon
            name='add'
            color= '#fff'
            size={50}
             onPress = {() => navigation.navigate('AddAccount')}
            />
        </Pressable> */}

    </View>
  )
}

const styles = StyleSheet.create({

  officerrank: {
    
    color: '#808080'
  
  },

  officername: {
    
    fontSize: 35, 
    fontWeight: '500', 
    color: '#808080'
  
  },

  profileimage: {
    
    borderRadius: 100, 
    height: 150, 
    width: 150, 
    margin: 20
  
  },

  AddUser: {
      width: 70,
      height: 70,
      backgroundColor: 'green',
      borderRadius: 100,
      position: 'absolute',
      bottom: 80,
      right: 0,
      justifyContent: 'center',   
      alignItems: 'center',
      margin: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
      elevation: 11,

    
  },

  HeaderContainer: {
    
    top: 0, 
    position: 'absolute',
    width: '100%', 
    backgroundColor: '#1240ac',
    height: 60, 
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11, 
  
  },




})