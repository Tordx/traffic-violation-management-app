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
    Modal,
    
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { Blue, Gray, iconColor, textColor } from '../Assets/colors';
import { useNavigation } from '@react-navigation/native';
import { remoteDBAcoount } from '../Database/pouchDB';
import { version } from '../components/ViolationData';
import { useDispatch } from 'react-redux';
import { setFullname, setUsername , setFullDetais } from '../Redux/LoginSlice';
import { setPassword } from '../Redux/LoginSlice';
import { ActivityIndicator } from 'react-native-paper';
import { DriverSignature } from '../components/DriverSignature';


export default function LoginScreen() {

    useEffect(() => {

        const backAction = () => {
          BackHandler.exitApp()
          return true;
        };
    
        const handler = BackHandler.addEventListener('hardwareBackPress', backAction);
        return () => handler.remove();
    },[])

    const dispatch = useDispatch()


    const navigation = useNavigation()

    const [username, setUsernames] = useState('')
    const [password, setPasswords] = useState('')
    const [input, setInput] = useState();
    const [inputsecure, setInputSecure] = useState(true)
    const [isModalVisible, setisModalVisible] = useState(false);

      const LoginData = async () => {

        
        setisModalVisible(true)
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
                const FullDetails = newFilterData[0]
                 // anti key sensitive
                if((username.toLowerCase() == Username.toLowerCase()) && (password == Password)){
                    
                    dispatch(setUsername(username.toLowerCase()))
                    dispatch(setFullDetais(FullDetails))
                    dispatch(setUsername(username))
                    dispatch(setPassword(password))
                    dispatch(setFullname(Fullname))
                    navigation.navigate('HomeTab')
                    setisModalVisible(false)

                   }else{
                    ToastAndroid.show('Username and Password did not match',ToastAndroid.LONG)
                    
                    setisModalVisible(false)
                   }
            }else{
                ToastAndroid.show('username and password did not match',ToastAndroid.LONG)
                
                setisModalVisible(false)
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
            <Pressable style = {[styles.loginButton,{backgroundColor:'#00000019'}]}
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

            <Modal
                visible = {isModalVisible}
                transparent = {true}
                animationType = 'fade'
            >
                <StatusBar
                    hidden = {true}
                    />
                <View style ={{flex: 1, backgroundColor: '#00000039', justifyContent: 'center', alignItems: 'center',}}>
                    
                    <View style = {{width: 350, height: 100, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderRadius: 5}}>
                        <ActivityIndicator size={'small'} color = {'#1240ac'}/>
                        <Text style = {{marginLeft: 20}}>Logging in, Please wait...</Text>
                    </View>
                </View>
            </Modal>
        
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
        borderWidth: 1,
        borderColor: Gray
    
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