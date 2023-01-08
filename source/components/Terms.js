import { View, Text, Pressable, Modal, BackHandler, Image,TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { consent } from './ViolationData';
import { Black, Gray, Green, HighlightColor } from '../Assets/colors';
import { Backbutton, CloseButton } from './buttons';
import { Checbox } from './ViolationField';

export default function Terms() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
    
     BackHandler.addEventListener('hardwareBackPress', setIsModalVisible(false));
    
      },[])
      

  return (
    <View style  = {{flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20}}>
        <Pressable onPress = {() => setIsModalVisible(true)} >
        <Text style={{textDecorationLine: 'underline', color: Green, fontFamily: 'codenext-semibold'}}>Data Privacy Policy</Text>
        </Pressable>
        <Modal
            animationType='slide'
            visible = {isModalVisible}
        >
            <View style  = {{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                <Image
                    style = {{height: 150, width: 100}}
                    source={require('../Assets/Images/tvmlogo.png')}
                />
                <Text style={{fontSize: 20, color: HighlightColor, fontWeight: 'bold', margin: 20, }} >DATA PRIVACY</Text>         
                <Text style = {{fontSize: 16, margin: 20, color: Gray, textAlign: 'justify'}} >{consent}</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
                <Checbox
                    status = 'checked'
                    color = {Green}
                />
                <Text style = {{textAlign: 'center'}}>I agree to the system's <Text style  = {{color: Green}}>Data Privacy Policy</Text></Text>
                </View>
                
            </View>
            <TouchableOpacity 
                onPress={() => setIsModalVisible(false)}
                style = {{width: '90%', height: 50, backgroundColor: '#1240ac', justifyContent: 'center', alignSelf: 'center', borderRadius: 5, margin: 10}} >
                    <Text style = {{fontSize: 20, color: '#fff', textAlign: 'center'}}>CONTINUE</Text>
            </TouchableOpacity>
        </Modal>
    </View>
  )
}