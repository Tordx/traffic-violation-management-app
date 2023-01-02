import { 
    
    View, 
    Text, 
    Modal, 
    TouchableOpacity, 
    StyleSheet,
    Pressable

} from 'react-native'
import React, { useEffect, useState } from 'react'
import SignaturePad from 'react-native-signature-pad-v2'
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import { setSignatureData } from '../Redux/ViolationSlice';

export const Signature = (props) => {

    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(setSignatureData(signaturedata))

    },[signaturedata])


    const [pressed, setPressed] = useState(false);
    const [disable, setDisable] =  useState(false);
    const [signaturedata, _setSignatureData] = useState(null);
    
    const openSignature = () => {

        setPressed(true)
        setDisable(true)
    }

    const handleSignatureCapture = (signaturedata) => {
        setPressed(false);
        _setSignatureData(signaturedata)
        console.log('success save')
        console.log(signaturedata)
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
                onChangeText = {handleSignatureCapture}
            
                error = {props.error}
                />
                <View style  = {{position: 'absolute', top: 20}}>
                    <Text style = {{fontSize: 30, fontWeight: '500'}}>DRIVERS SIGNATURE</Text>
                </View>
                <Pressable
                style = {{positiion: 'absolute', bottom : 20, width: '90%', height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1240ac', borderRadius: 5}}
                onPress = {handleSignatureCapture}
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