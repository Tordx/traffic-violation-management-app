import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, ListViewComponent, SectionList } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    rn: '56665124',
    fullname: 'John Doe',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    rn: '56655001',
    fullname: 'Mary Grace',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    rn: '56635331',
    fullname: 'Jayson Fernandez',
  },
  {
    id: 'bd7acbe2a-c1b1-46c2-aed5-3ad53abb28ba',
    rn: '56615125',
    fullname: 'Grazziel Garcia',
  },
  {
    id: '3ac68af3c-c605-48d3-a4f8-fbd91aa97f63',
    rn: '56651631',
    fullname: 'Jerrylyn Bugarin',
  },
  {
    id: '586944a0f-3da1-471f-bd96-145571e29d72',
    rn: '56653312',
    fullname: 'Charlote Mose',
  },
  {
    id: 'bd17acbea-c1b1-46c2-aed5-3ad53abb28ba',
    rn: '56652678',
    fullname: 'Ryan Cezar vallo',
  },
  {
    id: '3ac68a1fc-c605-48d3-a4f8-fbd91aa97f63',
    rn: '56656357',
    fullname: 'Bonn Jovi',
  },
  {
    id: '58694a0f-3d5a1-471f-bd96-145571e29d72',
    rn: '56657864',
    fullname: 'Hekhek',
  },
];
export const TicketingList = () => {

  const renderItem = ({ item }) => (
 
    <View style={styles.item}> 
      <TouchableOpacity>
        <Text style={styles.title}>#{item.rn}</Text>
        <Text>{item.fullname}</Text>
      </TouchableOpacity>
      
    </View>
 
  );

  return (
    <SafeAreaView style={styles.container}>
     
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '25%',
    paddingBottom: '30%',
    backgroundColor: '#fffc '

    
  },
  item: {
    alignSelf: 'center',
    width: 400,
    height: 100,
    padding: 20,
    marginVertical: 3,
    marginHorizontal: 5,
    borderBottomWidth: 0.3,
    borderColor: '#808080',
  },

  title: {
    fontSize: 32,
  },
});