import { 
    
    View, 
    Text, 
    Modal, 
    TouchableOpacity, 
    StyleSheet 

} from 'react-native'
import React, { useState } from 'react'
import SignaturePad from 'react-native-signature-pad-v2'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import  Icon  from 'react-native-vector-icons/MaterialIcons';

export const Signature = (props) => {

    const [pressed, setPressed] = useState(false);
    const [disable, setDisable] =  useState(false);
    const openSignature = () => {

        setPressed(true)
        setDisable(true)
    }

  return (
    
    <View style  = {{width: '100%', justifyContent: 'center', alignItems: 'center',}}>
        <TouchableOpacity
        style = {styles.opensignature}
            onPress={openSignature}
            disable = {disable}
        >
            <Text style = {{textAlign: 'center',
        fontSize: 17,
        fontWeight: '500',}}>Driver's signature</Text>
        </TouchableOpacity>
        <Modal
       
        visible = {pressed}
        >
            <View  style = {{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                
                <SignaturePad
                style = {{width: 500, height: 100, backgroundColor: '#fff', justifyContent: 'center'}}
                onChangeText = {props.onChangeText}
                error = {props.error}
                />
                <View style  = {{position: 'absolute', top: 20}}>
                    <Text style = {{fontSize: 30, fontWeight: '500'}}>DRIVERS SIGNATURE</Text>
                </View>
                <Pressable
        style = {{positiion: 'absolute', bottom : 20, width: '90%', height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1240ac', borderRadius: 5}}
        onPress = {() => setPressed(false)}
        >
            <Icon
                name='check'
                color={'#fff'}
                size = {35}
            />
        </Pressable>
        </View>
        </Modal>
   </View>
  )
}

const styles = StyleSheet.create({

    

    opensignature: {

        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 5,
        width: '90%',
        height: 50,
        borderWidth: 2,
        borderColor: '#000',
        borderStyle: 'dashed',
        borderRadius: 5,

    },
})