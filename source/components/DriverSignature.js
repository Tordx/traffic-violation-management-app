// Unable to convert signature to image as it only returns base64 image, it's not an Image URL/URI
import React, { useEffect, useState } from 'react'
import { 
    
    View, 
    Text, 
    Modal, 
    TouchableOpacity, 
    StyleSheet,
    Alert

} from 'react-native'
import SignaturePad from 'react-native-signature-pad-v2'
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import { setSignatureData } from '../Redux/ViolationSlice';

export const DriverSignature = (props) => {

    const dispatch = useDispatch();
    const [disabled, setDisabled] = useState(false)
    const [signaturedata, _setSignatureData] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);
    

    useEffect(() => {

        console.log(signaturedata)
        
    },[])


    const signed = (signature) => {
      console.log(signature)
      if(signature.length === 0) {
        Alert.alert("No signature Saved")
      } else {

      _setSignatureData("Signed")
      dispatch(setSignatureData("Signed"))
      console.log(signaturedata)
      setDisabled(true)
      setModalVisible(false)
    }
      
    }
   

  return (
    
    <View style  = {{width: '100%', justifyContent: 'center', alignItems: 'center',}}>
        <TouchableOpacity
        style = {styles.opensignature}
            onPress={() => setModalVisible(true)}
            disabled = {disabled}
        >
            <Text style = {{textAlign: 'center',
        fontSize: 17,
        fontWeight: '500',}}>Driver's signature</Text>
        </TouchableOpacity>
        <Modal
       
        visible = {isModalVisible}
        >
            <View  style = {{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                
                <SignaturePad
                style = {{width: 500, height: 100, backgroundColor: '#fff', justifyContent: 'center'}}
                  onChangeText = {signed}
                />
                <View style  = {{position: 'absolute', top: 20}}>
                    <Text style = {{fontSize: 30, fontWeight: '500'}}>DRIVERS SIGNATURE</Text>
                </View>
                <TouchableOpacity
                style = {{positiion: 'absolute', bottom : 20, width: '90%', height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1240ac', borderRadius: 5}}
                onPress = {signed}
        >
            <Icon
                name='check'
                color={'#fff'}
                size = {35}
            />
        </TouchableOpacity>
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