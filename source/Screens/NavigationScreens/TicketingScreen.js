import { View, Text, Pressable, StyleSheet, Image, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { HighlightColor } from '../../Assets/colors'
import { useNavigation } from '@react-navigation/native'
import { TicketingList } from '../../components/TicketList'
import { version } from '../../components/ViolationData'

export default function TicketingScreen() {

    const navigation = useNavigation();

  return (
    <LinearGradient colors={['#f2f2f2', '#f2f2f2', '#fff', ]}    style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
      <StatusBar
      backgroundColor={'#fff'}
      />
        <ScrollView style={{width: '100%'}}>
        
            <TicketingList/>
            
       
      <View style = {{height: 100, justifyContent: 'center',
        alignItems: 'center',}}>
      <Text style = {{textAlign: 'center', fontSize: 30, fontWeight: '500'}}>NO NEW FIELDS HERE </Text>
      </View>
        </ScrollView>
        <Pressable style={styles.AddTicket} 
            onPress = {() => navigation.navigate('AddTicketScreen')}
            android_ripple = {{

                color: '#F4EAE6',
                radius: 35,

            }}
        > 
            <Icon
            name='add'
            color= '#fff'
            size={50}
            />
        </Pressable>
        <View style = {styles.HeaderContainer} >
        <View style = {{
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        }}>
      <Text style = {{textAlign: 'center', fontSize: 20, fontWeight: '500', color: 'grey'}}>Violators List</Text>
      </View>
      <Pressable style={{right: 0, position: 'absolute', margin: 10, bottom: 1,}}>
        <Icon
        name='search'
        size={30}
        />
      </Pressable>
      </View>
        <Text style = {{fontSize: 10, color: '#000', position:  'absolute', bottom: 5}} >{version}</Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({

    HeaderContainer: {
    
        top: 0, 
        position: 'absolute',
        width: '100%', 
        backgroundColor: '#fff',
        height: 60, 
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
        backgroundColor: '#E57F84',
        borderRadius: 100,
        position: 'absolute',
        bottom: 100,
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

})