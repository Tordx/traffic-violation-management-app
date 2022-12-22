import Reac , {useState, useEffect} from 'react';
import { 
    
    View,
    Text,
    TextInput, 
    StyleSheet,
    Pressable,
    Image,
    StatusBar,
    BackHandler,
    Alert
    
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { iconColor, textColor } from '../      ../../Assets/colors';
import { useNavigation } from '@react-navigation/native';
import { remoteDBAcoount } from '../Database/pouchDB';
import { version } from '../components/ViolationData';
import { useDispatch } from 'react-redux';
import { setUsername } from '../Redux/LoginSlice';
import { setPassword } from '../Redux/LoginSlice';



export default function LoginScreen() {

    const dispatch = useDispatch()

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
    
        return () =>
          BackHandler.removeEventListener("hardwareBackPress", backAction);
      }, []);

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
    

    const navigation = useNavigation()

    const [username, setUsernames] = useState('')
    const [password, setPasswords] = useState('')

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
              return item.Username === username
            });
            if(!filteredData.length == 0) {
                let newFilterData = filteredData.map(item => {
                    return item
                })

                // dispatch(setStudentInfo(newFilterData))
                const Username = newFilterData[0].Username;
                const Password = newFilterData[0].Password
                dispatch(setUsername(username))
                dispatch(setPassword(password))
                if((username == Username ) && (password == Password) ){
                    navigation.navigate('HomeTab')

                   }else{
                     Alert.alert('StudentID and Birthdate not match')
                   }
            }else{
                Alert.alert('StudentID and Birthdate not match')
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
            style = {{width: '25%', height: '25%'}}
        />

            <Text style = {{fontSize: 35, fontWeight: 'bold',  textAlign: 'center', color: textColor, marginTop: 15}} > Welcome Back!</Text>
            <Text style = {{fontSize: 15, textAlign: 'center',  color: textColor, marginBottom: 5}} > Login to your Account </Text>
            <View style = {styles.InputContainer}>
                <Icon
                    style = {{marginLeft: 10,}}
                    name={'person'}
                    size = {25}
                    color =  '#c4c7cc'

                />
                <TextInput
                onChangeText={(value) => setUsernames(value)}
                value={username}
                placeholderTextColor={'#c4c7cc'}
                placeholder={'username'}
                style = {{fontSize: 17}}
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
                placeholder={'password'}
                style = {{fontSize: 17}}
                />
            </View>
            <Pressable style = {styles.loginButton}
            // onPress = {() => navigation.navigate('HomeTab')}
            onPress = {LoginData}
            android_ripple = {{

                color: '#1240ac'

            }}
            >
                <Text style = {{textAlign: 'center', fontSize: 20, color: '#fff', fontWeight: '700'}} >LOG IN</Text>
            </Pressable>
            
            <Pressable style = {{justifyContent: 'center', width: '75%',}}>
            <Text style = {{marginTop: 10, textAlign: 'center'}}> forgot password </Text>
            </Pressable>
           
        </View>
        
            <Text style = {{fontSize: 10, color: '#fff', position: 'absolute', bottom: 5}} >{version}</Text>
            
    </LinearGradient>
  )
}

const styles = StyleSheet.create({

    loginButton: {
        
        width: '86%', 
        height: 50,  
        justifyContent: 'center',
        marginVertical: 10,
        borderRadius: 5, 
        borderWidth: 0.5,
    
    },


    loginContainer: {
        
        width: '100%', 
        height: '100%',
        justifyContent: 'center', 
        alignItems: 'center',
    
    },

    InputContainer: { 
        
        backgroundColor: '#fffe', 
        height: 50, 
        width: '86%', 
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