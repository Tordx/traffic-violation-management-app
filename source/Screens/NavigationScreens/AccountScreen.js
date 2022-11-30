import { View, Text, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'
import  Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'


export default function AccountScreen() {

  const navigation = useNavigation()

  return (
    
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style = {styles.HeaderContainer} >
        <View style = {{
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        }}>
      <Text style = {{textAlign: 'center', fontSize: 20, fontWeight: '500', color: 'grey'}}>Account</Text>
      </View>
      <Pressable style={{right: 0, position: 'absolute', margin: 10, bottom: 1,}}>
        <Icon
        name='settings'
        size={30}
        />
      </Pressable>
      </View>
      
      <View style = {{justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 75}}>
        <Image
        
        source={require('../../Assets/Images/Cat-Studying-scaled.jpg')}
        style = {{borderRadius: 100, height: 150, width: 150, margin: 20}}

        />

        <Text style = {{fontSize: 25, fontWeight: '400'}} >Professor Cat</Text>

      </View>

      <Pressable style={styles.AddUser} > 
            <Icon
            name='add'
            color= '#fff'
            size={50}
             onPress = {() => navigation.navigate('AddAccount')}
            />
        </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({

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
    backgroundColor: '#fff',
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