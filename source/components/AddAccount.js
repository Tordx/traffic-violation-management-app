import React , {useState} from 'react';
import { 
    
    View,
    Text,
    TextInput, 
    StyleSheet,
    Pressable,
    Image,
    ImageBackground,
    Alert
    
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { iconColor, textColor } from '../Assets/colors';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';

// const LoginInput = (props) => {
//     return (
//     <View style = {styles.InputContainer}>
//         <Icon
//             style = {{marginLeft: 10,}}
//             name={props.name}
//             size = {25}
//             color =  '#B7CFDC'

//         />
//         <TextInput
        
//         placeholderTextColor={iconColor}
//         placeholder={props.placeholder}
//         style = {{fontSize: 17}}
//         />
//     </View>
// )
// }


export default function AddAccount() {

    const navigation = useNavigation()
    const id = uuid.v4();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const createAccount = () => {

        if(1+1 == 3){
          console.log('hey')
        }
       else{
         try {
           var NewAccount = {
            _id: id,
             Username : username,
             Password : password,
           }
        localDBAccount.put(NewAccount)
           .then((response) =>{
             Alert.alert('Your Account has been successfully added!')
             console.log(response)
             SyncAccount()
             navigation.navigate('LoginScreen')
           })
           .catch(err=>console.log(err))
           
         } catch (error) {
          console.log(error)
         }
         }
    }

    const login =  () => {
        
        username == '' ? Alert.alert('Please Enter Username') : 
        (password == '' ? Alert.alert('Please Enter Password') : 
         createAccount())
    }
    

  return (
    <LinearGradient colors={['#F4EAE6', '#F4EAE6', '#2F5061']}   style = {styles.container} >
        
        
        <View style = {styles.loginContainer} >
        {/* <Image        
            source={require('../Assets/Images/pnp_logo.png')}
            style = {{width: '30%', height: '15%'}}
        /> */}

            <Text style = {{fontSize: 35, fontWeight: 'bold',  textAlign: 'center', color: textColor, marginTop: 15}} > Create Account</Text>
            <Text style = {{fontSize: 15, textAlign: 'center',  color: textColor, marginBottom: 5}} > Please Enter The Information </Text>
            <View style = {styles.InputContainer}>
                <Icon
                    style = {{marginLeft: 10,}}
                    name={'person'}
                    size = {25}
                    color =  '#B7CFDC'

                />
                <TextInput
                onChangeText={(value) => setUsername(value)}
                value={username}
                placeholderTextColor={iconColor}
                placeholder={'usename'}
                style = {{fontSize: 17}}
                />
            </View>
            <View style = {styles.InputContainer}>
                <Icon
                    style = {{marginLeft: 10,}}
                    name={'lock'}
                    size = {25}
                    color =  '#B7CFDC'

                />
                <TextInput
                onChangeText={(value) => setPassword(value)}
                value={password}
                placeholderTextColor={iconColor}
                placeholder={'password'}
                style = {{fontSize: 17}}
                />
            </View>
           
            <Pressable style = {{justifyContent: 'flex-end', width: '75%',}}>
            {/* <Text style = {{marginTop: 10, textAlign: 'right'}}> forgot password </Text> */}
            </Pressable>
            <Pressable style = {styles.loginButton}
            onPress = {login}
            android_ripple = {{

                color: '#E57F84'

            }}
            >
                <Text style = {{textAlign: 'center', fontSize: 20, color: '#fff', fontWeight: '700'}} >ADD ACCOUNT</Text>
            </Pressable>
           
        </View>
        
            <Text style = {{fontSize: 10, color: '#fff', position: 'absolute', bottom: 150}} >Violation Ticketing System 1.0.0</Text>
            
    </LinearGradient>
  )
}

const styles = StyleSheet.create({

    loginButton: {
        
        width: '75%', 
        height: 50,  
        justifyContent: 'center', 
        borderRadius: 5, 
        margin: 20, 
        borderWidth: 0.5,
    
    },


    loginContainer: {
        
        width: '100%', 
        height: '100%',
        justifyContent: 'center', 
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#00000019'
    
    },

    InputContainer: { 
        
        backgroundColor: '#fff', 
        height: 50, 
        width: '75%', 
        alignItems: 'center', 
        marginTop: 20, 
        borderRadius: 5, 
        flexDirection: 'row',
    },

    container: {

        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'

    }


})