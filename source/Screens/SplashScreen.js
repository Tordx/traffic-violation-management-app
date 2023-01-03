import React, { useEffect } from 'react';
import { 
    View, 
    StyleSheet,
    Image,
    StatusBar,
    
} from 'react-native';
import NetInfo from '@react-native-community/netinfo'

export default function SplashScreen ({navigation}) {


    useEffect(() => {

        const unsubscribe = NetInfo.addEventListener(state => {
            if (state.isConnected) {

            console.log('Verified Connection')
            setTimeout(() => {
                navigation.replace('LoginScreen');
            }, 2000);
            } else {
               Alert.alert('Sorry', 'Please connect to the internet to use the application');
            }
         });
   
         return unsubscribe;

    }, []);

    return (
        <View style={styles.container}>
            <StatusBar
            hidden
            />
            <Image
            style = {{ width: 200,
                height: 200}}
            source = {require('../Assets/Images/tvmlogo.png')}

            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4EAE6',
    },
});