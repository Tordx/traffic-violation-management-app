import { TouchableOpacity } from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/MaterialIcons'

export const CloseButton = (props) => {

    return (

      <TouchableOpacity
      
      style = {{position: 'absolute', top: 10, left: 0, margin: 10,}}
      onPress = {props.onPress}

      >
        <Icon
        
        name='arrow-back'
        size={33}
        color = {props.color}

        />
      </TouchableOpacity>

    )

}


export const Backbutton = (props) => {

  return (

    <TouchableOpacity
    
    style = {{margin: 15, }}
    onPress = {props.onPress}

    >
      <Icon
      
      name='arrow-back'
      size={33}
      color = {props.color}

      />
    </TouchableOpacity>

  )
}