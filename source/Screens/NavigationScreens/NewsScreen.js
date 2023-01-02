import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbe2a-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68af3c-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '586944a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd17acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68a1fc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3d5a1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export const NewsScreen = () => {

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (

    <SafeAreaView style={styles.container}>
     <View style={styles.listcontainer}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </View>
      <View style = {styles.HeaderContainer} >
        <View style = {{
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        }}>
      <Text style = {{textAlign: 'center', fontSize: 20, fontWeight: '500', color: '#fff'}}>Announcements</Text>
      </View>
      <Pressable style={{right: 0, position: 'absolute', margin: 10, bottom: 1,}}>
        <Icon
        name='search'
        size={30}
        color = '#fff'
        />
      </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',

    
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
});

export default NewsScreen;