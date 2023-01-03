import React, { useState, useEffect } from 'react';
import { 
  SafeAreaView, 
  View, 
  FlatList, 
  StyleSheet, 
  Text, 
  TouchableOpacity,
  ActivityIndicator, 
} from 'react-native';
import { remoteDBViolation } from '../Database/pouchDB';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Icon from  'react-native-vector-icons/MaterialIcons';

export const TicketingList = () => {

  

  const dispatch = useDispatch();
  const {username} = useSelector((store) => store.login);
  const [mytickets, setNewTickets] = useState();

  useEffect(() => {
    const rendertickets = async() => {
      var result = await remoteDBViolation.allDocs({
        include_docs: true,
        attachments: true,
      });
      if (result.rows) {
        let modifiedArr = result.rows.map(function(item) {
          return item.doc;
        });
        let filteredData = modifiedArr.filter(item => {
          return item.UserName === username;
        });
        if (filteredData) {
          let newFilterData = filteredData.map(item => {
            return item;
          });
          setNewTickets(newFilterData);
        } 
      } 
    };
    rendertickets();
  },[username, mytickets]);



  const renderItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity style  = {{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',}}>
        <View>
        <Text style={styles.title}># {item.refNum}</Text>
        <Text style={styles.name}>{item.DriverName} — {item.date} {item.time}</Text>
        </View>
        <Icon 
        name = 'more-vert' 
        size = {30}
        color = '#1240ac'
        style = {{position: 'absolute', right: 0}}/>
      </TouchableOpacity>
      
    </View>
    )
 
}

  return (
    <SafeAreaView style={styles.container}>
     {mytickets? (<FlatList
        data={mytickets}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      ):(
      <ActivityIndicator size="large" color="#1240ac"/>
      )}
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '30%',
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
    fontSize: 25,
    color: '#808080'
  },

  name: {
    color: '#808080'
  },
});