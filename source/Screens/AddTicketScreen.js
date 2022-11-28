import { 
    
    View, 
    Text, 
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import { iconColor } from '../Assets/colors'
import { CloseButton } from '../components/buttons'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'

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
            />
        </View>

        </View>
    )

}

export default function AddTicketScreen() {

    const navigation = useNavigation();
    const [next, setNext] = useState(true);
  
    return (
        <LinearGradient colors={['#fff', '#fff', '#F4EAE6']} style = {styles.container}>
        {   next?  <View style = {{width: '100%'}}> 
        <Text style = {styles.HeaderText}>PERSONAL INFORMATION</Text>
            <InputText
                placeholder = 'e.g. John Doe'
                title = "Driver's Name"
            />
            <InputText
                placeholder = "City/Town, Province"
                title = "Driver's Address"
            />
            <InputText
                placeholder = "09xxxxxxxxx"
                title = "Contact Number"
            />
            <InputText
                placeholder = "A12-34567890"
                title = "License Number"
            />
             
            </View>
            :
            <View>
                <Text style = {styles.HeaderText} >VEHICLE INFORMATION</Text>
        </View>}
               { next? <TouchableOpacity
                style = {styles.nextbutton}
                onPress={() => setNext(!next)}
             >
                <Text>PRESS ME</Text>
            </TouchableOpacity> : <TouchableOpacity
                style = {styles.nextbutton}
                onPress={() => setNext(!next)}
             >
                <Text>PRESS ME</Text>
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
        bottom: 20

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