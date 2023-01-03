import React, { useState } from 'react';
import { View, Text, Button, Modal, Pressable } from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

export const Popup = () => {

    const {username} = useSelector((store) => store.login)
    const [isModalVisible, setModalVisible] = useState(true);

  return (
    <View>
        
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
      
            
        <View style = {{justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
      
          <View style = {{width: '80%', height: '70%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 20,}}>
                    
            <Pressable
                style = {{position: 'absolute', top: 10, right: 10}}
                onPress={() => setModalVisible(false)}>
                <Icon
                name='close'
                size={35}
                />
            </Pressable>
            <Text style = {{fontSize: 20}}>Welcome back {username}!</Text>
            
          </View>
        </View>
        
      </Modal>
    </View>
  );
};