import { View, Text, Pressable, StyleSheet, Image, Alert, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'  // Import useState and useEffect hooks
import  Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { remoteDBAcoount } from '../../Database/pouchDB'

function AccountScreen() {
  const {username} = useSelector((store) => store.login)
  const navigation = useNavigation()
  const [FullName, setFullName] = useState('') 
  const [Rank, setRank] = useState('')  

  useEffect(() => {

    const setUser = async() => {
      var result = await remoteDBAcoount.allDocs({
        include_docs: true,
        attachments: true
      });
      if (result.rows) {
        let modifiedArr = result.rows.map(function(item) {
          return item.doc
        });
        let filteredData = modifiedArr.filter(item => {
          return item.Username == username;
        });
        if (filteredData) {
          let newFilterData = filteredData.map(item => {
            return item;
          });
          setFullName(newFilterData[0].FullName);
          setRank(newFilterData[0].Rank);
        }
      }
    } 
    setUser();
  },[username])


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
        
        source={require('../../Assets/Images/sample_officer.png')}
        style = {styles.profileimage}

        />

        {FullName? (<Text style = {styles.officername} >{FullName}</Text>) : (<ActivityIndicator/>)}
      <View>
        {Rank? (<Text style={styles.officerrank}>{Rank}</Text>) : (<ActivityIndicator/>)}
      </View>

      </View>

      {/* <Pressable style={styles.AddUser} > 
            <Icon
            name='add'
            color= '#fff'
            size={50}
             onPress = {() => navigation.navigate('AddAccount')}
            />
        </Pressable> */}

    </View>
  )
}

const styles = StyleSheet.create({

  officerrank: {
    
    color: '#808080'
  
  },

  officername: {
    
    fontSize: 35, 
    fontWeight: '500', 
    color: '#808080'
  
  },

  profileimage: {
    
    borderRadius: 100, 
    height: 150, 
    width: 150, 
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