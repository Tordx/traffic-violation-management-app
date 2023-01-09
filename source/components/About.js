import { View, Text, Pressable, Modal, BackHandler, Image,TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { about, consent } from './ViolationData';
import { Black, Blue, Gray, Green, HighlightColor } from '../Assets/colors';
import { } from './ViolationField';
import { ScrollView } from 'react-native-gesture-handler';
import { CloseButton } from './buttons';

export default function About(props) {

    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
    
     BackHandler.addEventListener('hardwareBackPress', setIsModalVisible(false));
    
      },[])
      

  return (
    <View style  = {{width: '100%'}}>
        <TouchableOpacity onPress = {() => setIsModalVisible(true)} 
            style = {styles.bottombuttons}
            android_ripple = {{

                color: {Blue}

            }}
        >
        <Text style={styles.buttontext}>ABOUT US</Text>
        </TouchableOpacity>
        <Modal
            animationType='slide'
            visible = {isModalVisible}
        >
            <ScrollView>
            <View style  = {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Blue, paddingBottom: 100}}>
                
                <Image
                    style = {{height: 100, width: 200}}
                    source={require('../Assets/Images/RtNgIen.png')}
                />
                <Text style={{fontSize: 20, color: '#fff', fontFamily: 'codenext-bold', marginBottom: 20, }} >ABOUT US</Text>
                <View style = {{backgroundColor: '#FFF', width: '95%', borderRadius: 5}}> 
                <Text style = {{fontSize: 16, margin: 20, color: Black, textAlign: 'justify', fontWeight: '400'}} >{about}</Text>
                </View>  
            </View>
            </ScrollView>
            <CloseButton
                onPress = {() => setIsModalVisible(false)}
                color = {'#fff'}
            />
            
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({

    continue: {
        width: '90%', 
        height: 50,  
        justifyContent: 'center',
        marginVertical: 10,
        borderRadius: 5,
        backgroundColor: '#00000049',
        borderColor: '#FFFF',
        borderWidth: 1,
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center'
    },

    buttontext: {

        fontSize: 16, 
        textAlign: 'center', 
        fontFamily: 'codenext-semibold', 
        color: Gray
    
      },
    
      bottombuttons: {
    
        width: '100%', 
        height: 40, 
        paddingTop: 20,
        marginBottom: 20,
        justifyContent: 'center', 
        alignItems: 'center', 
        borderTopWidth: .3, 
        borderColor: Blue
    
      }
    

})