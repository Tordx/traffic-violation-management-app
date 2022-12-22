import React, { useState, useEffect } from 'react';
import { 
  
  SafeAreaView, 
  View, 
  FlatList, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 

} from 'react-native';
import { remoteDBViolation } from '../Database/pouchDB';

export const TicketingList = () => {

  useEffect(() => {
    rendertickets()

  },[])

  const [mytickets, setNewTickets] = useState('');

  const rendertickets = async() => {

    var result = await remoteDBViolation.allDocs({
      include_docs: true,
      attachments: true,
    });
    if(result.row){
      let modifiedArr = result.rows.map(function(item){
        return item.doc
      });
      let filteredData = modifiedArr.filter(item => {
        return item;
      });
      if (filteredData) {
        let newFilterData = filteredData.map(item => {
            return item;
        })
        setNewTickets(newFilterData)
      }
    }

  }
  

  const renderItem = ({ item }) => {
  return (
    <View style={styles.item}> 
      <TouchableOpacity>
        <Text style={styles.title}>#{item.DriverName}</Text>
        <Text style={styles.name}>{item.LicenseNumber}</Text>
      </TouchableOpacity>
      
    </View>
    )
 
}

  return (
    <SafeAreaView style={styles.container}>
     
      <FlatList
        data={mytickets}
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
    color: '#808080'
  },

  name: {
    color: '#808080'
  },
});