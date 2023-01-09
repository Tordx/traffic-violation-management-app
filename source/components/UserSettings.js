import { 
    
    View, 
    Text, 
    TouchableOpacity, 
    TextInput, 
    StyleSheet, 
    Alert

} from 'react-native'
import React, { useState, useEffect } from 'react';
import { remoteDBAcoount } from '../Database/pouchDB';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Black, Gray, PaleBlue } from '../Assets/colors';

export default function UserSettings() {

    const navigation = useNavigation();
    const {username} = useSelector((store) => store.login)
    const dispatch = useDispatch();
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [input, setInput] = useState(true);
    const [inputsecure, setInputSecure] = useState(true);
    const [newinputsecure, setNewInputSecure] = useState(true);
    const [confirminputsecure, setConfirmInputSecure] = useState(true);

    const clearData = () => {
    dispatch({ type: 'CLEAR_DATA', payload: '' })  // Dispatch action to reducer
    console.log(clearData)
    navigation.navigate('SplashScreen')
    }


    useEffect (() => {

        
    if (currentPassword.length === 0) {
        setInput(true)
    } else if (newPassword.length === 0) {
        setInput(true)
    } else {
        setInput(false)
    }

       

    },[])


    const changepassword = async() => {

        var result = await remoteDBAcoount.allDocs({
            include_docs: true,
            attachments: true
          });
          if(result.rows){
              let modifiedArr = result.rows.map(function(item){
              return item.doc
          });
          let filteredData = modifiedArr.filter(item => {
              return item.Username == username;
            });
            if(!filteredData.length == 0) {
                let newFilterData = filteredData.map(item => {
                    return item
                })

                const Password = newFilterData[0].Password
                if(currentPassword != Password) {
                    Alert.alert("The password you entered is incorrect");
                    console.log(Password);
                } else if (newPassword != confirmPassword){
                    Alert.alert("Please Confirm your New password");
                } else {

                    // If doc is updated, it won't update other parameters
                    const updatedDoc = {
                        _id: newFilterData[0]._id,
                        _rev: newFilterData[0]._rev,
                        Username: newFilterData[0].Username,
                        Fullname: newFilterData[0].FullName,
                        Rank: newFilterData[0].Rank,
                        Password: newPassword,
                        Citation: newFilterData[0].Citation,
                        
                      };
                      await remoteDBAcoount.put(updatedDoc);
                      console.log('Password Changed');
                      console.log(updatedDoc)
                      Alert.alert("PasswordSuccessfully changed, Please re-login")
                      navigation.navigate('LoginScreen')
                } 
                }   
            } 
       
        }
    

  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <Text style  = {{fontSize: 20, fontWeight: '500', marginBottom: 20}}> Change password</Text>
        <View style = {{width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', }}>

        <View style = {styles.InputContainer}>
                <TextInput
                onChangeText={(value) => setCurrentPassword(value)}
                value={currentPassword}
                placeholderTextColor={'#c4c7cc'}
                secureTextEntry = {inputsecure}
                placeholder={'Current Password'}
                style = {styles.textinput}/>
                <TouchableOpacity style = {{position: 'absolute', right: 10}}
                onPress = {() => setInputSecure(!inputsecure)}
                >
                <Icon
                    
                    name={inputsecure? 'visibility-off' : 'visibility'}
                    size = {25}
                    color =  '#c4c7cc'

                />
                </TouchableOpacity>
            </View>
            <View style = {styles.InputContainer}>
                <TextInput
                onChangeText={(value) => setNewPassword(value)}
                value={newPassword}
                placeholderTextColor={'#c4c7cc'}
                secureTextEntry = {newinputsecure}
                placeholder={'New Password'}
                style = {styles.textinput}/>
                <TouchableOpacity style = {{position: 'absolute', right: 10}}
                onPress = {() => setNewInputSecure(!newinputsecure)}
                >
                <Icon
                    
                    name={newinputsecure? 'visibility-off' : 'visibility'}
                    size = {25}
                    color =  '#c4c7cc'

                />
                </TouchableOpacity>
            </View>
            <View style = {styles.InputContainer}>
                <TextInput
                onChangeText={(value) => setConfirmPassword(value)}
                value={confirmPassword}
                placeholderTextColor={'#c4c7cc'}
                secureTextEntry = {confirminputsecure}
                placeholder={'Confirm New Password'}
                style = {styles.textinput}/>
                <TouchableOpacity style = {{position: 'absolute', right: 10}}
                onPress = {() => setConfirmInputSecure(!confirminputsecure)}
                >
                <Icon
                    
                    name={confirminputsecure? 'visibility-off' : 'visibility'}
                    size = {25}
                    color =  '#c4c7cc'

                />
                </TouchableOpacity>
            </View>
           
        </View>
        <TouchableOpacity
                style = {styles.changepassword}
                onPress={changepassword}
            >
               <Text style = {{textAlign: 'center', fontSize: 20, fontFamily: 'codenext-semibold', color: Gray}} >Update Password</Text>
            </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

    changepassword: {
        width: 300, 
        height: 50,  
        justifyContent: 'center',
        marginVertical: 10,
        borderRadius: 5,
        marginBottom: 100,
        borderColor: '#1240ac',
        borderWidth: .5,
    },

    textinput: {
        
        fontSize: 17, 
        textAlign: 'left', 
        height: 50, 
        width: '85%', 
        borderRadius: 5,
        backgroundColor: '#fffe'
    
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

})