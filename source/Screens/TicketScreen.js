import React, { useEffect, useState } from 'react'
import { 
  
  View, 
  Text, 
  Image, 
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Modal,
  BackHandler
  
} from 'react-native'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { CloseButton } from '../components/buttons';
import { useNavigation } from '@react-navigation/native';
import { Black, Gray, Green, HighlightColor } from '../Assets/colors';
import { setSelectedTicket } from '../Redux/TicketSlice';
export default function TicketScreen() {

  const {selectedTicket} = (useSelector((store) => store.ticket))
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation()

  let textColor;
    if (selectedTicket.Status === 'Unpaid') {
      textColor = HighlightColor;
    } else if (selectedTicket.Status === 'Paid') {
      textColor = Green;
    } 

 
    useEffect(() => {

      const backAction = () => {
         navigation.navigate('HomeTab')
        return true;
      };

      const handler = BackHandler.addEventListener('hardwareBackPress', backAction);
      return () => handler.remove();

      }, []);
                
  

  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
      
      <View style = {{position: 'absolute', top: 0, width: '100%'}}>
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
      <Image
      resizeMode='cover'
      source={{uri:selectedTicket.Image}}
      style = {{justifyContent: 'center', alignItems: 'center', width: '100%', height: 200}}/>
      </TouchableOpacity>
      <View style = {styles.card}>
      <Text style = {styles.titleheader}>Driver Details</Text>
      <Text style={styles.name}>{selectedTicket.DriverName}</Text>
      <Text style = {styles.titledetail}>Driver's License:  <Text style = {{color: Black}}>{selectedTicket.LicenseNumber}</Text></Text>
      <Text style = {styles.titledetail}>Address:  <Text style = {{color: Black}}>{selectedTicket.DriverAddress}</Text></Text>
      <Text style = {styles.titledetail}>Contact Number: <Text style = {{color:Black}}>{selectedTicket.ContactNumber}</Text></Text>
      <Text style = {styles.titledetail}>Signature: <Text style = {{color:Black}}>{selectedTicket.SignatureData}</Text></Text>
      </View>
      <View style = {styles.card}>
      <Text style = {styles.titleheader}>Citation Details</Text>
      <Text style = {styles.titledetail}>Reference Number:   <Text style = {{fontSize: 15, fontWeight:'900', color: Black}} ># <Text style={styles.title}>{selectedTicket.refNum} </Text></Text></Text>
      <Text style = {styles.titledetail}>Time/Date:   <Text style = {{color:Black}}>  {selectedTicket.time} — {selectedTicket.date}</Text></Text>
      <Text style = {styles.titledetail}>Officer's Name:  <Text style = {{color: Black}}>{selectedTicket.FullName}</Text></Text>
      <Text style = {styles.titledetail}>Vehicle's License Plate:  <Text style = {{color: Black}}>{selectedTicket.LicensePlate}</Text></Text>
      <Text style = {styles.titledetail}>Violation/s:  <Text style = {{color: Black}}>{selectedTicket.Speeding}—{selectedTicket.Obstruction}—{selectedTicket.Registration}—
      {selectedTicket.OrCr}—{selectedTicket.Nolicense}—{selectedTicket.ExpiredLicense}—{selectedTicket.DUI}—{selectedTicket.Attire}—{selectedTicket.Reckless}—{selectedTicket.Document}—{selectedTicket.Others}</Text></Text>
      </View>
      <View style = {[styles.card, {height:'15%'}]}>
      <Text style = {styles.titleheader}>Ticket Status</Text>
      <Text style = {[styles.status, {color: textColor}]}>{selectedTicket.Status}</Text>
      </View>
      </View>
      <CloseButton
      onPress = {() => navigation.goBack('Ticketing')}
      color = {'#fff'}
      />
      <Modal
      animationType='fade'
      visible = {isModalVisible}
      >
        <ImageBackground
        resizeMode='contain'
        source={{uri:selectedTicket.Image}}
        style = {{justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', backgroundColor: '#000'}}>
          <CloseButton
          onPress = {() => setIsModalVisible(false)}
          color = {'#fff'}
          />
        </ImageBackground>
      </Modal>
      </View>
   
  )
}

const styles = StyleSheet.create({

  status: {

    fontSize: 25,
    fontFamily: 'codenext-bold',
    marginVertical: 2,
    marginHorizontal: 15,

  },

  title: {
    fontSize: 17,
    color: Black,
    marginHorizontal: 15,
    fontFamily: 'codenext-semibold',
    textAlign: 'left'
    
  },

  name: {
    color: Black,
    marginHorizontal: 15,
    fontSize: 25,
    fontFamily: 'codenext-semibold',
    textAlign: 'left'
  },

  titledetail: {

    color: Gray,
    marginVertical: 2,
    marginHorizontal: 15,
    fontSize: 15,
    textAlign: 'left'

  },

  titleheader: {

    marginHorizontal: 15,
    marginTop: 15, 
    marginBottom: 10, 
    color: Gray, 
    fontSize: 20, 
    fontFamily: 'codenext-bold',
    textAlign: 'left'
  
  },

  card: {
        
    justifyContent: 'flex-start', 
    alignItems: 'flex-start', 
    alignSelf: 'center', 
    width: '95%', 
    height: '30%', 
    backgroundColor: '#fff', 
    marginHorizontal: 20, 
    marginVertical: 10,
    borderRadius: 10
    
    }

})