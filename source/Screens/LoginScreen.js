import React , {useState, useEffect, } from 'react';
import { 
    
    View,
    Text,
    TextInput, 
    StyleSheet,
    Pressable,
    Image,
    StatusBar,
    BackHandler,    
    Alert,
    ToastAndroid,
    TouchableOpacity,
    
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { iconColor, textColor } from '../Assets/colors';
import { useNavigation } from '@react-navigation/native';
import { remoteDBAcoount } from '../Database/pouchDB';
import { version } from '../components/ViolationData';
import { useDispatch } from 'react-redux';
import { setFullname, setUsername } from '../Redux/LoginSlice';
import { setPassword } from '../Redux/LoginSlice';
import { ActivityIndicator } from 'react-native-paper';
import { DriverSignature } from '../components/DriverSignature';


export default function LoginScreen() {

    const dispatch = useDispatch()

    useEffect(() => {

      const backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to go Exit the App?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
      };

      const handler = BackHandler.addEventListener('hardwareBackPress', backAction);
      return () => handler.remove();

      }, []);
                

    const navigation = useNavigation()

    const [username, setUsernames] = useState('')
    const [password, setPasswords] = useState('')
    const [input, setInput] = useState();
    const [inputsecure, setInputSecure] = useState(true)

      const LoginData = async () => {

        var result = await remoteDBAcoount.allDocs({
            include_docs: true,
            attachments: true
          });
          if(result.rows){
              let modifiedArr = result.rows.map(function(item){
              return item.doc
          });
          let filteredData = modifiedArr.filter(item => {
              return item.Username === username.toLowerCase()
            });
            if(!filteredData.length == 0) {
                let newFilterData = filteredData.map(item => {
                    return item
                })
                const Username = newFilterData[0].Username;
                const Password = newFilterData[0].Password;
                const Fullname  = newFilterData[0].FullName;
                 // anti key sensitive
                if((username.toLowerCase() == Username.toLowerCase()) && (password == Password)){
                    dispatch(setUsername(username.toLowerCase()))
                    dispatch(setPassword(password))
                    dispatch(setFullname(Fullname))
                    navigation.navigate('HomeTab')

                   }else{
                    ToastAndroid.show('Username and Password did not match',ToastAndroid.LONG)
                    // Vibration.vibrate();
                   }
            }else{
                ToastAndroid.show('username and password did not match',ToastAndroid.LONG)
                // Vibration.vibrate();
            }
            
        }
       
      }

    

  return (
    <LinearGradient colors={['#F4EAE6', '#F4EAE6', '#1240ac']}   style = {styles.container} >
        <StatusBar
        backgroundColor={'#F4EAE6'}
        barStyle = 'dark-content'
        />
        
        <View style = {styles.loginContainer} >
        <Image        
            source={require('../Assets/Images/tvmlogo.png')}
            style = {{width: '30%', height: '25%'}}
        />

            <Text style = {{fontSize: 35, fontFamily: 'codenext-bold',  textAlign: 'center', color: textColor, margin: 15}} > Welcome Back</Text>
            <Text style = {{fontSize: 15, fontFamily: 'codenext-semibold', textAlign: 'center',  color: textColor, marginBottom: 10}} > Login to your Account </Text>
            <View style = {styles.InputContainer}>
                <Icon
                    style = {{marginLeft: 10,}}
                    name={'person'}
                    size = {25}
                    color =  '#c4c7cc'

                />
                <TextInput
                onChangeText={(value) => setUsernames(value)}
                style = {styles.textinput}
                value={username}
                placeholderTextColor={'#c4c7cc'}
                placeholder={'username'}
                autoCapitalize = 'none'
                />
            </View>
            <View style = {styles.InputContainer}>
                <Icon
                    style = {{marginLeft: 10,}}
                    name={'lock'}
                    size = {25}
                    color =  '#c4c7cc'

                />
                <TextInput
                onChangeText={(value) => setPasswords(value)}
                value={password}
                placeholderTextColor={'#c4c7cc'}
                secureTextEntry = {inputsecure}
                placeholder={'password'}
                style = {styles.textinput}
                />
                <Pressable style = {{position: 'absolute', right: 10}}
                onPress = {() => setInputSecure(!inputsecure)}
                >
                <Icon
                    
                    name={inputsecure? 'visibility-off' : 'visibility'}
                    size = {25}
                    color =  '#c4c7cc'

                />
                </Pressable>
            </View>
            <Pressable style = {[styles.loginButton,{backgroundColor: input? '#00000019': '#1240ac'}]}
            disabled = {input}
            onPress = {LoginData}
            android_ripple = {{

                color: '#fff'

            }}
            >
                {LoginData? (<Text style = {{textAlign: 'center', fontSize: 20, color: input? '#00000029': '#ffff', fontWeight: '700'}} >LOG IN</Text>) : (<ActivityIndicator/>)}
            </Pressable>
            
            <TouchableOpacity style = {{justifyContent: 'center', width: '75%',}}
            onPress = {() => navigation.navigate('ForgotPasswordScreen')}
            >
            <Text style = {{marginTop: 10, textAlign: 'center', textDecorationLine: 'underline', fontSize: 16}}> forgot password </Text>
            </TouchableOpacity>
           
        </View>
        
            <Text style = {{fontSize: 10, color: '#fff', position: 'absolute', bottom: 5}} >{version}</Text>
            
    </LinearGradient>
  )
}

const styles = StyleSheet.create({

    textinput: {
        
        fontSize: 17, 
        textAlign: 'left', 
        height: 50, 
        width: '85%', 
        borderRadius: 5, 
    
    },

    loginButton: {
        
        width: '85%', 
        height: 50,  
        justifyContent: 'center',
        marginVertical: 10,
        borderRadius: 5, 
    
    },


    loginContainer: {
        
        width: '100%', 
        height: '100%',
        justifyContent: 'center', 
        alignItems: 'center',
    
    },

    InputContainer: { 
        
        backgroundColor: '#fffe',
        alignItems: 'center', 
        marginVertical: 10, 
        borderRadius: 5, 
        flexDirection: 'row',
        borderWidth: 0.3,
        borderColor: '#c1cde0',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.36,
        shadowRadius: 1,
        elevation: 1,
    },

    container: {

        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'

    }


})