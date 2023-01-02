import { View, Text } from 'react-native'
import React from 'react'
import { CloseButton } from '../components/buttons'
import { useNavigation } from '@react-navigation/native'

export default function SearchScreen() {

  const navigation =  useNavigation()

  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
      <CloseButton
        onPress = {() => navigation.navigate('Ticketing')}
      />
      <Text>SearchScreen</Text>
    </View>
  )
}