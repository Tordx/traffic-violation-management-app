import { 
  
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  ActivityIndicator 

} from 'react-native'
import React, { useState, useEffect } from 'react'  // Import useState and useEffect hooks
import  Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { Black } from '../../Assets/colors'

function AccountScreen() {
  const {fulldetails} = useSelector((store) => store.login)
  const navigation = useNavigation();
  const [FullName, setFullName] = useState(false)
  const [Rank, setRank] = useState(false)
  const [image, setImage] = useState('https://i.imgur.com/XwEDEkd.png')

  useEffect(() => {

    if(fulldetails.FullName) {setFullName(true)}
    if(fulldetails.Rank) {setRank(true)}
    if(fulldetails.Image) {setImage(fulldetails.Image)}
    
  },[fulldetails])

  return (
    
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      
      <View style = {styles.HeaderContainer} >
        <View style = {{
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        }}>
      <Text style = {{textAlign: 'center', fontSize: 20, fontWeight: '500', color: '#fff'}}>Account</Text>
      </View>
      <TouchableOpacity style={{right: 0, position: 'absolute', marginRight: 10,}}
        onPress = {() => navigation.navigate('UserSettingScreen')}
        >
        <Icon
        name='settings'
        size={30}
        color = '#fff'
        />
      </TouchableOpacity>
      </View>
      
      <View style = {{justifyContent: 'center', alignItems: 'center'}}>
        
        <Image
          source={{uri: image}}
          style = {styles.profileimage} />

        {FullName? (<Text style = {styles.officername} >{fulldetails.FullName}</Text>) : (<ActivityIndicator size={"large"} />)}
      <View>
        {Rank? (<Text style={styles.officerrank}>{fulldetails.Rank}</Text>) : (<ActivityIndicator />)}
      </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  officerrank: {
    
    color: Black,

  
  },

  officername: {
    
    fontSize: 35, 
    fontWeight: '500', 
    color: Black,
    fontFamily: 'codenext-bold'
  
  },

  profileimage: {
    
    borderRadius: 100, 
    height: 200, 
    width: 200, 
    margin: 20
  
  },

  AddUser: {
      width: 70,
      height: 70,
      backgroundColor: 'green',
      borderRadius: 100,
      position: 'absolute',
      bottom: 80,
      right: 0,
      justifyContent: 'center',   
      alignItems: 'center',
      margin: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
      elevation: 11,

    
  },

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




})


export default React.memo(AccountScreen)