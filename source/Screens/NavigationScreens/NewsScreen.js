import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const NewsScreen = () => {

  return (

    <SafeAreaView style={styles.container}>
        <Image
        resizeMode = 'cover'
          style = {{height: '40%', width: '100%', justifyContent: 'center', alignItems: 'center',}}
          source={{ uri: 'https://media.istockphoto.com/id/1149451413/vector/girl-lift-her-hands-with-confuse-face.jpg?s=612x612&w=0&k=20&c=Yp_Qi7p_OUJJS62QEWJp5YG_OhDwHDwGPHbYVFCZJ7M='}}
        />
        <Text>No Announcements yet, please check me frequently.</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'

    
  },
  listcontainer: {
    
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,

    
  },
  item: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    width: 400,
    height: 500,
    padding: 20,
    marginVertical: 3,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.36,
    shadowRadius: 2,
    elevation: 5,
  },

  title: {
    fontSize: 32,
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
});

export default NewsScreen;