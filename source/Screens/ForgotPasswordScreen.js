import React, {useEffect} from 'react'
import { 
  
  View, 
  Text,
  BackHandler, 
  StatusBar,

} from 'react-native'
import { useNavigation } from '@react-navigation/native';
export default function ForgotPasswordScreen() {

   const navigation = useNavigation();

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
    
        return () => true
      }, []);

      const backAction = () => {
            navigation.goBack('LoginScreen')
        return true;
      };

  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F4EAE6'}}>
        <StatusBar
        backgroundColor={'#F4EAE6'}/>
      <Text>For forgotten Password, Please contact your Adminstrator </Text>
    </View>
  )
}