import { 
    
    View, 
    Text, 
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView
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
import { Signature } from '../components/Signature'
const InputText = (props) => {

    // huwag idisable, gumamit ng props

    return (
        <View style = {{width: '100%', justifyContent: 'center', alignItems: 'center',}}>
        <Text style = {{ alignSelf: 'flex-start', marginHorizontal: 20, fontSize: 16, fontWeight: '300', color: '#808080'}} >{props.title}</Text>
        <View style = {styles.InputContainer}>
            <TextInput
            
            placeholderTextColor={'#c4c7cc'}
            placeholder={props.placeholder}
            style = {{fontSize: 17, fontWeight: '300', color: '#808080'}}
            value = {props.value}
            onChangeText = {props.onChangeText}
            keyboardType = {props.keyboardType}
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
    const [referenceNumber, setReferenceNumber] = useState('this is a reference number');

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
             DriverName : drivername.toString(),
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
             rfn: referenceNumber.toString(),
           }
           locaDBViolation.put(NewViolation)
           .then((response) =>{
            const body = "Hi there" + drivername + "You've been Apprehended and must pay a certain amount, please present this reference number: " + referenceNumber;
            console.log(body)
             SendSMS.send(
                {
                  body: body,
                  recipients: [contactnumber],
                  successTypes: ['sent', 'queued'],
                  allowAndroidSendWithoutReadPermission: true
                },
                (completed, cancelled, error) => {
                  if (completed) {
                    console.log('SMS Sent Complete');
                  } else if (cancelled) {
                    console.log('SMS Sent Cancelled');
                  } else if (error) {
                    console.log('Some error occured');
                  }
                },
              );
             console.log(response)
             SyncViolation()
             navigation.navigate('HomeTab')
             Alert.alert('Your Account has been successfully added!')
           })
           .catch(err=>console.log(err))
           
         } catch (error) {
          console.log(error)
         }
         }


         
    }

    const SubmitSignature = ({base64DataUrl}) => {

      console.log("submitted a signature" + base64DataUrl)


  }

  // const nextcondition = () => {

  //     if (drivername.length == 0) {
  //         Alert.alert("Please insert Driver's Fullname")   
  //     } else if (driveraddress.length == 0) {
  //         Alert.alert("Please insert Driver's Address")  
  //     } else if (contactnumber.length < 11) {
  //         Alert.alert("Contact number must be 11 Digit")   
  //     } else if (licensenumber.length < 0) {
  //         Alert.alert("Driver's License must be at least 12 Alphanumeric ID")   
  //     } else {
  //         setNext(false)
  //     }

  // }
  
    return (
        <LinearGradient colors={['#fff', '#fff', '#F4EAE6']} style = {styles.container}>
            <ScrollView style = {{width: '100%', paddingTop: 20}}>
        {next?  
        <View style = {{width: '100%', justifyContent: 'center', alignItems: 'center'}}> 
            <Text style = {styles.HeaderText}>PERSONAL INFORMATION</Text>
            <InputText
                onChangeText={(value) => setDriverName(value)}
                value={drivername}
                placeholder = 'e.g. John Doe'
                title = "Driver's Full Name"
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
                keyboardType = 'numeric'
            />
            <InputText
                onChangeText={(value) => setLicenseNumber(value)}
                value={licensenumber}
                placeholder = "A12-34567890"
                title = "License Number"
            />
             
            </View>
            :
            
            <View style = {{width: '100%', paddingBottom: 100, justifyContent: 'center', alignItems: 'center'}}> 
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
                <TouchableOpacity
                    style = {styles.oPenCamera}
                    onPress={() => console.log('Camera open')}
                >
                    <Text style = {[styles.buttontext,{color: 'grey'}]}>Upload Photo</Text>
                </TouchableOpacity>
                <Text style = {styles.HeaderText}>TRAFFIC VIOLATION</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'center',  width: 420, marginBottom: 20,}}>
                    <ViolationField/>
                </View>
                
                <InputText
                    placeholder = "Specify here ..."
                    title = "Others"
                />
            
                <Signature
                
                onChangeText = {SubmitSignature}
                error = {(error) => {console.error(error)}}
                />
                </View>
                
                }
                </ScrollView>

               {next? 
               
                <TouchableOpacity
                    style = {styles.nextbutton}
                    onPress={() => setNext(false)}
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

    oPenCamera: {

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

    HeaderText: { 
        
        textAlign: 'center',
        marginHorizontal: 20, 
        marginVertical: 20, 
        fontSize: 25, 
        fontWeight: '500',
        color: '#808080'
    
    },

    nextbutton: {

        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute', 
        bottom: 20,
        width: '90%',
        height: 50,
        backgroundColor: '#1240ac',
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
        width: '90%', 
        alignItems: 'flex-start',
        alignSelf: 'center',
        marginVertical: 10,
        borderRadius: 5,
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