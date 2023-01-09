import React, { useState } from 'react';
import { 
  
  View, 
  Text, 
  Button, 
  Modal, 
  Pressable, 
  ImageBackground, 
  TouchableOpacity 

} from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { Black } from '../Assets/colors';

export const Popup = () => {

    const {fullname} = useSelector((store) => store.login)
    const [isModalVisible, setModalVisible] = useState(true);

  return (
    <View>
        
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
      
            
        <View 
        
        style = {{justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', backgroundColor: '#00000019'}}>
      
        <View style = {{width: '80%', height: '50%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 20,}}>
          
           
          <ImageBackground
            resizeMode='contain'
            style={{height: '100%', width: '100%', position: 'absolute', bottom: 0,  justifyContent: 'center', alignItems: 'center'}}
            source={require('../Assets/Images/waving-officer.png')}
            >
              <View style = {{position: 'absolute', bottom: 20}}>
                <Text style = {{fontSize: 17, fontFamily: 'codenext-semibold', color: Black, textAlign: 'center' }}>Hi {fullname}!</Text>
                <Text style = {{fontSize: 17, fontFamily: 'codenext-semibold', color: Black, textAlign: 'center' }}>WELCOME TO TVM APP</Text>
              </View>
          </ImageBackground>
          
          </View>
          <TouchableOpacity
                style = {{justifyContent: 'center', alignItems: 'center',position: 'absolute', bottom: 100, borderRadius: 100, width: 35, height: 35, borderColor: '#fff', borderWidth: 2}}
                onPress={() => setModalVisible(false)}>
                <Icon
                name='close'
                size={30}
                color = {'#fff'}
                />
            </TouchableOpacity>
        </View>
        
      </Modal>
    </View>
  );
};