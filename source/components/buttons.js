import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/MaterialIcons'

export const CloseButton = (props) => {

    return (

      <TouchableOpacity
      
      style = {{position: 'absolute', top: 0, left: 0, margin: 10,}}
      onPress = {props.onPress}

      >
        <Icon
        
        name='close'
        size={35}
        color = 'black'

        />
      </TouchableOpacity>

    )

}