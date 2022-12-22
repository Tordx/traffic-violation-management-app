import React, { useEffect } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    Image,
    StatusBar,
} from 'react-native';


export default function SplashScreen ({navigation}) {

    useEffect(() => {
setTimeout(() => {
    navigation.replace('LoginScreen');
}, 2000);

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