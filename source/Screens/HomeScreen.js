import { View, Text, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { HighlightColor } from '../Assets/colors'
const MainMenuBox = (props) => {

    return (
        <Pressable style = {styles.MainMenuBox}
        android_ripple = {{

            color: '#E57F84',
            radius: 115
        }}>
            <Image
            source = {props.source}
            style={{width: '50%', height: '50%', marginBottom: 5}}
            />
            <Text style = {{fontSize: 15, fontWeight: 'bold', color: '#F4EAE6', textAlign: 'center'}}>
                {props.title}
            </Text>
        </Pressable>
    )

}

export default function HomeScreen() {
  return (
    <LinearGradient colors={['#F4EAE6', '#F4EAE6', '#2F5061', ]}    style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
        <View style  = {{height: '50%', width: '95%', alignItems: 'center', justifyContent: 'center'}}>
            <View style = {{flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center', height: '50%', margin: 0}}>
            </View>
        
        </View>
        
        
        <Pressable style={styles.AddTicket} > 
            <Icon
            name='add'
            color= '#fff'
            size={50}

            />
        </Pressable>    
        <Text style = {{fontSize: 10, color: '#fff', position:  'absolute', bottom: 5}} >Violation Ticketing System 1.0.0</Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({

    MainMenuBox:{
        
        width: '90%', 
        height: '90%', 
        borderWidth: .5, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 20, 
        backgroundColor: '#00000039', 
        marginHorizontal: 10,
        marginVertical: 10
    
    },

    AddTicket: {

        width: 70,
        height: 70,
        backgroundColor: HighlightColor,
        borderRadius: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        justifyContent: 'center',   
        alignItems: 'center',
        margin: 20,

    }

})