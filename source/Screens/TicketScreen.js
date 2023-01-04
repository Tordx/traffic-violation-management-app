import React from 'react'
import { 
  
  View, 
  Text, 
  Image, 
  StyleSheet
} from 'react-native'
import { useSelector } from 'react-redux';
import { CloseButton } from '../components/buttons';
import { useNavigation } from '@react-navigation/native';
import { Black, Gray } from '../Assets/colors';
export default function TicketScreen() {

  const {selectedTicket} = (useSelector((store) => store.ticket))
  const navigation = useNavigation()

  

  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
      <View style = {{position: 'absolute', top: 0, width: '100%'}}>
      <Image
      resizeMode='cover'
      source={{uri:selectedTicket.Image}}
      style = {{justifyContent: 'center', alignItems: 'center', width: '100%', height: 200}}/>
      <View style = {styles.card}>
      <Text style = {styles.titleheader}>Driver Details</Text>
      <Text style={styles.name}>{selectedTicket.DriverName}</Text>
      <Text style = {styles.titledetail}>Driver's License:  <Text style = {{color: Black}}>{selectedTicket.LicenseNumber}</Text></Text>
      <Text style = {styles.titledetail}>Address:  <Text style = {{color: Black}}>{selectedTicket.DriverAddress}</Text></Text>
      <Text style = {styles.titledetail}>Contact Detail: <Text style = {{color:Black}}>{selectedTicket.ContactNumber}</Text></Text>
      </View>
      <View style = {styles.card}>
      <Text style = {styles.titleheader}>Citation Details</Text>
      <Text style = {styles.titledetail}>Reference Number:   <Text style = {{fontSize: 15, fontWeight:'900', color: Black}} ># <Text style={styles.title}>{selectedTicket.refNum} </Text></Text></Text>
      <Text style = {styles.titledetail}>Time/Date:   <Text style = {{color:Black}}>  {selectedTicket.time} — {selectedTicket.date}</Text></Text>
      <Text style = {styles.titledetail}>Vehicle's License Plate:  <Text style = {{color: Black}}>{selectedTicket.LicensePlate}</Text></Text>
      </View>
      </View>
      <CloseButton
      onPress = {() => navigation.goBack('Ticketing')}
      color = {Black}
      />
    </View>
  )
}

const styles = StyleSheet.create({

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