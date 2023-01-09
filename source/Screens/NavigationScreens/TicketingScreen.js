import {

  View, 
  Text, 
  Pressable, 
  StyleSheet, 
  StatusBar, 
  TouchableOpacity, 
  Alert, 
  Image 

} from 'react-native'
import React, { useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { HighlightColor } from '../../Assets/colors'
import { useNavigation } from '@react-navigation/native'
import { TicketingList } from '../../components/TicketList'
import { version } from '../../components/ViolationData'
import { Popup } from '../../components/Popup'

export default function TicketingScreen() {

    const navigation = useNavigation();


    const confirm = () => {

      Alert.alert("Please Confirm", "You're about to add a citation ticket", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "Proceed", onPress: () => navigation.navigate('AddTicketScreen') }
      ]);
      return true;
    };

  return (
    <View style = {{width: '100%', justifyContent: 'center', alignItems: 'center'}} >
      <StatusBar
      backgroundColor={'#1240ac'}
      barStyle = {'light-content'}
      />
      <Popup/>
        <View>
          <View style={{width: '100%'}}>
            <TicketingList/>
            <Text>End of the list</Text>
            </View>
       
      <View style = {{height: 100, justifyContent: 'center',alignItems: 'center',}}>
      <Text style = {{textAlign: 'center', fontSize: 30, fontWeight: '500'}}>NO NEW FIELDS HERE </Text>
      </View>
        </View>
        <Pressable style={styles.AddTicket} 
            onPress = {confirm}
            android_ripple = {{

                color: '#1240ac',
                radius: 40,

            }}
        > 
            <Icon
            name='add'
            color= '#fff'
            size={50}
            />
        </Pressable>
        
        <View style = {styles.HeaderContainer} >
     
      <Text style = {{textAlign: 'left', fontSize: 20, fontFamily: 'codenext-bold', color: '#fff'}}>Citation List</Text>
      <TouchableOpacity style={{right: 0, position: 'absolute', marginRight: 10,}}
        onPress = {()=> navigation.navigate('SearchScreen')}
      >
        <Icon
        name='search'
        size={30}
        color = '#fff'
        />
      </TouchableOpacity>
      </View>
        <Text style = {{fontSize: 10, color: '#000', position:  'absolute', bottom: 5}} >{version}</Text>
        
    </View>
  )
}

const styles = StyleSheet.create({

    HeaderContainer: {
    
        top: 0,
        position: 'absolute',
        width: '100%', 
        backgroundColor: '#1240ac',
        height: 75, 
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11, 
      
    },

    AddTicket: {

        width: 70,
        height: 70,
        backgroundColor: '#00000019',
        borderRadius: 27,
        position: 'absolute',
        bottom: 65,
        right: 0,
        justifyContent: 'center',   
        alignItems: 'center',
        margin: 20,
        borderColor: '#1240ac',
        borderWidth: .5,

      
    },

})