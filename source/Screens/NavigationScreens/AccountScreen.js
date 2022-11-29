import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import  Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'


export default function AccountScreen() {

  const navigation = useNavigation()

  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      
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
      bottom: 200,
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

    
  }

})