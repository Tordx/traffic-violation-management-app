import Reac , {useState} from 'react';
import { 
    
    View,
    Text,
    TextInput, 
    StyleSheet,
    Pressable,
    Image,
    StatusBar,
    
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { iconColor, textColor } from '../      ../../Assets/colors';
import { useNavigation } from '@react-navigation/native';
import { remoteDBAcoount } from '../Database/pouchDB';
import { version } from '../components/ViolationData';

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


export default function LoginScreen() {

    const navigation = useNavigation()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //   const LoginData = async () => {

    //     var result = await remoteDBAcoount.allDocs({
    //         include_docs: true,
    //         attachments: true
    //       });
    //       if(result.rows){
    //           let modifiedArr = result.rows.map(function(item){
    //           return item.doc
    //       });
    //       let filteredData = modifiedArr.filter(item => {
    //           return item.Username === username
    //         });
    //         if(!filteredData.length == 0) {
    //             let newFilterData = filteredData.map(item => {
    //                 return item
    //             })

    //             // dispatch(setStudentInfo(newFilterData))
    //             const Username = newFilterData[0].Username;
    //             const Password = newFilterData[0].Password

    //             if((username == Username ) && (password == Password) ){
    //                 navigation.navigate('HomeScreen')

    //                }else{
    //                  Alert.alert('StudentID and Birthdate not match')
    //                }
    //         }else{
    //             Alert.alert('StudentID and Birthdate not match')
    //         }
            
    //     }
       
    //   }
    

  return (
    <LinearGradient colors={['#F4EAE6', '#F4EAE6', '#2F5061']}   style = {styles.container} >
        <StatusBar
        backgroundColor={'#F4EAE6'}
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
                // onChangeText={(value) => setUsername(value)}
                // value={username}
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
                // onChangeText={(value) => setPassword(value)}
                // value={password}
                placeholderTextColor={'#c4c7cc'}
                placeholder={'password'}
                style = {{fontSize: 17}}
                />
            </View>
            <Pressable style = {styles.loginButton}
            onPress = {() => navigation.navigate('HomeTab')}
            android_ripple = {{

                color: '#E57F84'

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