import { 
  
  View,
  Alert, 
  TouchableOpacity, 
  Text, 
  StyleSheet
} from 'react-native'
import React from 'react'
import UserSettings from '../components/UserSettings'
import { CloseButton } from '../components/buttons'
import { useNavigation } from '@react-navigation/native'
import { Black, Blue, Gray } from '../Assets/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import About from '../components/About'

export default function UserSettingScreen() {

    const navigation = useNavigation();
    const logout = () => {

      Alert.alert(
        "Confirm Log out",
        "Are you sure you want to logout from device?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "Confirm", onPress: ()=> navigation.navigate('LoginScreen') },
          
          ]
          );
      }

  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
      <UserSettings
     
      title = {styles.buttontext}
      />
      <CloseButton
        onPress = {() => navigation.navigate('Account')}
        color = {Black}
      />
      <View style = {{width: '100%', bottom: 20, justifyContent: 'center', alignItems: 'center'}}>
        <About/>
          <TouchableOpacity 
              style = {styles.bottombuttons}
              onPress = {logout}
              android_ripple = {{

                color: '#fff'

              }}
              >
            <View style = {{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Icon
              name = 'logout'
              size={20}
              color = {Gray}
            />
            <Text style = {styles.buttontext}>LOG OUT</Text>
            </View>
          </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  buttontext: {

    fontSize: 15, 
    textAlign: 'center', 
    fontFamily: 'codenext-semibold', 
    color: Gray

  },

  bottombuttons: {

    width: '100%', 
    height: 40, 
    paddingTop: 20, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderTopWidth: .3, 
    borderColor: Blue

  }

})