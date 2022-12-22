import { 
    
    View, 
    Text, 
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native'
import React, { useState } from 'react'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import { iconColor } from '../Assets/colors'
import { CloseButton } from '../components/buttons'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import { ViolationField } from '../components/ViolationField'
import { locaDBViolation ,  SyncViolation } from '../Database/pouchDB'
import SendSMS from 'react-native-sms';
import uuid from 'react-native-uuid';

const InputText = (props) => {

    // huwag idisable, gumamit ng props

    return (
        <View style = {{width: '100%', justifyContent: 'center', alignItems: 'center',}}>
        <Text style = {{ alignSelf: 'flex-start', marginHorizontal: 30, fontSize: 16, fontWeight: '300'}} >{props.title}</Text>
        <View style = {styles.InputContainer}>
            
            <Icon
                style = {{marginLeft: 10,}}
                name={props.name}
                size = {25}
                color =  '#B7CFDC'
    
            />
            <TextInput
            
            placeholderTextColor={'#c4c7cc'}
            placeholder={props.placeholder}
            style = {{fontSize: 17, fontWeight: '300'}}
            value = {props.value}
            onChangeText = {props.onChangeText}
            />
        </View>

        </View>
    )

}



export default function AddTicketScreen() {

    const id = uuid.v4();
    const navigation = useNavigation();
    const [next, setNext] = useState(true);
    const [drivername, setDriverName] = useState('')
    const [driveraddress, setDriverAddress] = useState('')
    const [contactnumber, setContactNumber] = useState('')
    const [licensenumber, setLicenseNumber] = useState('')
    const [licenseplate, setLicesnsePlate] = useState('')
    const [vehicletype, setVehicleType] = useState('')
    const [obstruction, setObstruction] = useState('')
    const [registration, setRegistration] = useState('')
    const [orcr, setORCR] = useState('')
    const [nolicense, setNoLicense] = useState('')
    const [document, setDocument] = useState('')
    const [expiredlicense, setExpiredLicense] = useState('')

    function _obstruction(text){
        setObstruction(text)
      }
      function _registration(text){
        setRegistration(text)
      }
      function _orcr(text){
        setORCR(text)
      }
      function _nolicense(text){
        setNoLicense(text)
      }
      function _document(text){
        setDocument(text)
      }
      function _expiredLicense(text){
        setExpiredLicense(text)
      }


    const createViolation = () => {

        if(1+1 == 3){
          console.log('hey')
        }
       else{
         try {
           var NewViolation = {
            _id: id,
             DriverName : drivername,
             DriverAddress : driveraddress,
             ContactNumber : contactnumber,
             LicenseNumber : licensenumber,
             LicensePlate : licenseplate,
             VehicleType : vehicletype,
             NoLicense : nolicense,
             ExpiredLicense : expiredlicense,
             FakeDocument : document,
             Obstruction : obstruction,
             NotRegistered : registration,
             OrCrExpired : orcr,
           }
           locaDBViolation.put(NewViolation)
           .then((response) =>{
             Alert.alert('Your Account has been successfully added!')
             SendSMS.send(
                {
                  // Message body
                  body: response ,
                  // Recipients Number
                  recipients: [contactnumber],
                  // An array of types 
                  // "completed" response when using android
                  successTypes: ['sent', 'queued'],
                },
                (completed, cancelled, error) => {
                  if (completed) {
                    console.log('SMS Sent Completedxxxxxxxxxxx');
                  } else if (cancelled) {
                    console.log('SMS Sent Cancelledyyyyyyyyyy');
                  } else if (error) {
                    console.log('Some error occuredddddddddddddddddddd');
                  }
                },
              );
             console.log(response)
             SyncViolation()
             navigation.navigate('HomeTab')
           })
           .catch(err=>console.log(err))
           
         } catch (error) {
          console.log(error)
         }
         }

            // Check for perfect 10 digit length
            // if (contactnumber.length != 10) {
            //   alert('Please insert correct contact numberooooooooooooooo');
            //   return;
            // }
        
          
        

    }
  
    return (
        <LinearGradient colors={['#fff', '#fff', '#F4EAE6']} style = {styles.container}>
        {next?  
        <View style = {{width: '100%'}}> 
            <Text style = {styles.HeaderText}>PERSONAL INFORMATION</Text>
            <InputText
                onChangeText={(value) => setDriverName(value)}
                value={drivername}
                placeholder = 'e.g. John Doe'
                title = "Driver's Name"
            />
            <InputText
                onChangeText={(value) => setDriverAddress(value)}
                value={driveraddress}
                placeholder = "City/Town, Province"
                title = "Driver's Address"
            />
            <InputText
                onChangeText={(value) => setContactNumber(value)}
                value={contactnumber}
                placeholder = "09xxxxxxxxx"
                title = "Contact Number"
            />
            <InputText
                onChangeText={(value) => setLicenseNumber(value)}
                value={licensenumber}
                placeholder = "A12-34567890"
                title = "License Number"
            />
             
            </View>
            :
            <View style = {{width: '100%'}}> 
                <Text style = {styles.HeaderText}>VEHICLE INFORMATION</Text>
                <InputText
                    onChangeText={(value) => setLicesnsePlate(value)}
                    value={licenseplate}
                    placeholder = 'ABC 1234'
                    title = "License Plate"
                />
                <InputText
                    onChangeText={(value) => setVehicleType(value)}
                    value={vehicletype}
                    placeholder = "Bus, Jeep, Motorcycle ..."
                    title = "Vehicle Type"
                />
                <Text style = {styles.HeaderText}>TRAFFIC VIOLATION</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'center',  width: 420}}>
                    <ViolationField 
                    obstruction = {_obstruction}
                    registration = {_registration}
                    orcr = {_orcr}
                    nolicense = {_nolicense}
                    document = {_document}
                    expiredLicense = {_expiredLicense}
                     />
                </View>     
                </View> 
                
                }
               {next? 
               
                <TouchableOpacity
                    style = {styles.nextbutton}
                    onPress={() => setNext(!next)}
                >
                    <Text style = {styles.buttontext}>NEXT</Text>
                </TouchableOpacity> 
            
            :   <TouchableOpacity
                    style = {styles.nextbutton}
                    onPress={createViolation}
                >
                    <Text style = {styles.buttontext}>SUBMIT</Text>
                </TouchableOpacity>}

            <CloseButton
            onPress = {() => navigation.goBack('HomeTab')}
            />
        </LinearGradient>
  )
}

const styles = StyleSheet.create({

    HeaderText: { 
        
        alignSelf: 'center', 
        marginHorizontal: 25, 
        marginVertical: 20, 
        fontSize: 25, 
        fontWeight: '500'
    
    },

    nextbutton: {

        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute', 
        bottom: 20,
        width: '86%',
        height: 50,
        backgroundColor: '#E57F84',
        borderRadius: 5,

    },

    buttontext: {

        textAlign: 'center',
        fontSize: 17,
        fontWeight: '500',
        color: '#fff'

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
        height: 3,
        },
        shadowOpacity: 0.36,
        shadowRadius: 1,
        elevation: 2,
    },

    container: {

        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'

    }

})