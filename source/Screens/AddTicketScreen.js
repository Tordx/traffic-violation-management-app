import { 
    
    View, 
    Text, 
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView,
    BackHandler,
    ToastAndroid,
    Image
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import { Black, iconColor } from '../Assets/colors'
import { CloseButton } from '../components/buttons'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import { ViolationField } from '../components/ViolationField'
import { locaDBViolation ,  SyncViolation, remoteRN , remoteDBAcoount } from '../Database/pouchDB'
import SendSMS from 'react-native-sms';
import uuid from 'react-native-uuid';
import { DriverSignature } from '../components/DriverSignature';
import { useSelector } from 'react-redux';
import { launchCamera } from 'react-native-image-picker'
import storage from '@react-native-firebase/storage';




const InputText = (props) => {

    // huwag idisable, gumamit ng props

    return (
        <View style = {{width: '100%', justifyContent: 'center', alignItems: 'center',}}>
        <Text style = {{ alignSelf: 'flex-start', marginHorizontal: 20, fontSize: 16, fontWeight: '300', color: '#808080'}} >{props.title}</Text>
       
            <TextInput
            
            placeholderTextColor={'#c4c7cc'}
            placeholder={props.placeholder}
            style = {styles.InputContainer}
            value = {props.value}
            onChangeText = {props.onChangeText}
            keyboardType = {props.keyboardType}
            />

        </View>
    )

}



export default function AddTicketScreen() {

  useEffect(() => {
    
    updateReferenceNumber()
    const backAction = () => {
      Alert.alert("Whoops!", "Please submit the current ticket before exiting", [
        {
          text: "Yes",
          onPress: () => null,
          style: "cancel"
        },
      ]);
      return true;
    };

    const handler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => handler.remove();

    

  },[])

  const {fulldetails} = useSelector((store) => store.login)
  const {username} = useSelector((store) => store.login)
  const {fullname} = useSelector((store) => store.login)
  const {dui} = useSelector((store) => store.violation)
  const {attire} = useSelector((store) => store.violation)
  const {speeding} = useSelector((store) => store.violation)
  const {reckless} = useSelector((store) => store.violation)
  const {signaturedata} = useSelector((store) => store.violation)
  const {registration} = useSelector((store) => store.violation)
  const {obstruction} = useSelector((store) => store.violation)
  const {orcr} = useSelector((store) => store.violation)
  const {expiredLicense} = useSelector((store) => store.violation)
  const {nolicense} = useSelector((store) => store.violation)
  const {document} = useSelector((store) => store.violation)

    const id = uuid.v4();
    
    const navigation = useNavigation();
    const [next, setNext] = useState(true);
    const [drivername, setDriverName] = useState(); 
    const [driveraddress, setDriverAddress] = useState()
    const [contactnumber, setContactNumber] = useState();
    const [licensenumber, setLicenseNumber] = useState(); 
    const [licenseplate, setLicesnsePlate] = useState();
    const [vehicletype, setVehicleType] = useState();
    const [referenceNumber, setReferenceNumber] = useState();
    const [others, setOthers] = useState('');
    const [transferred, setTransferred] = useState(0);
    const [image, setImage] = useState('');
    const [status, setStatus] = useState('Unpaid');
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();

    // console.log('fulldetails');
    // console.log(fulldetails);
    // console.log('fulldetails');
      const updateReferenceNumber = async () => {
        var result = await remoteRN.allDocs({
          include_docs: true,
          attachments: true
        });
        if (result.rows) {
          let modifiedArr = result.rows.map(function(item) {
            return item.doc
          });
          let filteredData = modifiedArr.filter(item => {
            return item;
          });
          if (filteredData) {
            let newFilterData = filteredData.map(item => {
              return item;
            });
            const updatedDoc = {
              _id: newFilterData[0]._id,
              _rev: newFilterData[0]._rev,
              referenceNumber: newFilterData[0].referenceNumber + 1,
            };
            await remoteRN.put(updatedDoc);
            setReferenceNumber(newFilterData[0].referenceNumber + 1)
            console.log('New reference number: ', updatedDoc.referenceNumber);
          }
        }
      };

    const createViolation = async() => {

        if(image === ''){
          Alert.alert('Photo needed', 'Please upload apprehended MV Photo')
        } 
       else{
        const  uri  =  image;
        const filename = uri.substring(uri.lastIndexOf('/') + 1);
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
        setTransferred(0);
        const task = storage()
          .ref(filename)
          .putFile(uploadUri);
        // set progress state
        task.on('state_changed', snapshot => {
          setTransferred(
            Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
          );
        });
        try {
          await  task;
        } catch (e) {
          console.error(e);
        }
        await remoteDBAcoount.get(fulldetails._id).then(function(doc) {
          return remoteDBAcoount.put({
            _id: fulldetails._id,
            ...doc,
            Citation: fulldetails.Citation + 1
          });
        }).then(function(response) {
        }).catch(function (err) {
          console.log(err);
        });
        const firebasedata = await storage().ref(filename).getDownloadURL();
        // dispatch(setImages(url));
        setImage(firebasedata)
         try {
           var NewViolation = {
              _id: id,
              time: time,
              date: date,
              refNum: referenceNumber,
              DriverName : drivername.toString(),
              FullName: fullname,
              UserName: username,
              Image: image,
              DriverAddress : driveraddress,
              ContactNumber : contactnumber,
              LicenseNumber : licensenumber,
              LicensePlate : licenseplate,
              VehicleType : vehicletype,
              Obstruction : obstruction,
              Registration : registration,
              OrCr : orcr,
              Nolicense : nolicense,
              ExpiredLicense : expiredLicense,
              DUI : dui,
              Attire : attire,
              Speeding : speeding,
              Reckless : reckless,
              Document : document,
              Others: others,
              SignatureData: signaturedata,
              Status: status,
           }
           locaDBViolation.put(NewViolation)
           .then((response) =>{
            const body = "Mrs/Ms " + drivername +  " You've been Apprehended and must pay a certain amount, please present this reference number at the cashiers office: TVM"  + referenceNumber;
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
             ToastAndroid.show('Successfully Added a Citation Ticket', ToastAndroid.SHORT)
           })
           .catch(err=>console.log(err))
           
         } catch (error) {
          console.log(error)
         }
         }


         
    }

  const nextcondition = () => {

      if (drivername.length == 0) {
          Alert.alert("Please insert Driver's Fullname")   
      } else if (driveraddress.length == 0) {
          Alert.alert("Please insert Driver's Address")  
      } else if (contactnumber.length != 11) {
          Alert.alert("Contact number must be 11 Digit")   
      } else if (licensenumber.length < 0) {
          Alert.alert("Driver's License must be at least 12 Alphanumeric ID")   
      } else {
          setNext(false)
      }

  }

  const OpenCamera = async() => {
    
    launchCamera({cameraType: 'front' , maxHeight: 300 , maxWidth: 300 ,  mediaType: 'photo'}, response => {
      
      console.log(response)
      navigation.navigate('AddTicketScreen')

    }).then(image => {
      console.log('First Process')
      console.log(image.assets[0].uri)
      console.log(image.assets[0].fileName)
      console.log('Sucess upload')
      setImage(image.assets[0].uri); 
    });

  }
  
    return (
        <LinearGradient colors={['#fff', '#fff', '#F4EAE6']} style = {styles.container}>
            <ScrollView style = {{width: '100%', paddingTop: 20}}>
        {next?  
        <View style = {{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <Text> Citation Reference Number: <Text>{referenceNumber}</Text></Text>
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
                    onPress={OpenCamera}
                >
                    <Text style = {[styles.buttontext,{color: 'grey'}]}>Upload Photo</Text>
                </TouchableOpacity>
                <Text style = {styles.HeaderText}>TRAFFIC VIOLATION</Text>
                <View style = {{flexDirection: 'row', justifyContent: 'center',  width: 420, marginBottom: 20,}}>
                    <ViolationField/>
                </View>
                
                <InputText
                
                    onChangeText = {(value => setOthers(value))}
                    value = {others}
                    placeholder = "Specify here ..."
                    title = "Others"
                />
            
                <DriverSignature
                />
                </View>
                
                }
                </ScrollView>

               {next? 
               
                <TouchableOpacity
                    style = {styles.nextbutton}
                    onPress={nextcondition}
                >
                    <Text style = {styles.buttontext}>NEXT</Text>
                </TouchableOpacity> 
            
            :   <TouchableOpacity
                    style = {styles.nextbutton}
                    onPress={createViolation}
                >
                    <Text style = {styles.buttontext}>SUBMIT</Text>
                </TouchableOpacity>}
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
        
        color: Black,
        fontSize: 17,
        fontWeight: '300',
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