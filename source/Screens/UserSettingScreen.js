import { View, Text } from 'react-native'
import React from 'react'
import UserSettings from '../components/UserSettings'
import { CloseButton } from '../components/buttons'
import { useNavigation } from '@react-navigation/native'

export default function UserSettingScreen() {

    const navigation = useNavigation();

  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
      <UserSettings/>
      <CloseButton
        onPress = {() => navigation.navigate('Account')}
      />
    </View>
  )
}