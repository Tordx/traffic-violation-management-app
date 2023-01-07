import React, { useState, useEffect } from 'react';
import { 
  SafeAreaView, 
  View, 
  FlatList, 
  StyleSheet, 
  Text, 
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
  BackHandler,

} from 'react-native';
import { remoteDBViolation } from '../Database/pouchDB';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Icon from  'react-native-vector-icons/MaterialIcons';
import { setSelectedTicket } from '../Redux/TicketSlice';

export const TicketingList = () => {

  
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {username} = useSelector((store) => store.login);
  const [mytickets, setNewTickets] = useState();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    rendertickets();
    
      const backAction = () => {
        navigation.goBack('TicketingScreen')
      };

      const handler = BackHandler.addEventListener('hardwareBackPress', backAction);
      return () => handler.remove();

  },[username, mytickets]);

    
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

  const onRefresh = () => {
    setRefreshing(true);
    rendertickets();
    setRefreshing(false);
  }
  

  const renderItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity style  = {{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',}}
      onPress = {() => { 
        
        console.log('success')
        dispatch(setSelectedTicket(item)); 
        navigation.navigate('TicketScreen');
      }}
      >
        <View>
        <Text style = {{fontSize: 25, fontWeight:'900', color: '#111129'}} ># <Text style={styles.title}>{item.refNum}</Text></Text>
        <Text style={styles.name}>{item.DriverName} — {item.date} {item.time} </Text>
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
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
      ):(
        <View style = {{justifyContent: 'center', alignItems: 'center',}}>
          <ActivityIndicator size="large" color="#1240ac"/>
        </View>
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
    color: '#111129',
    fontFamily: 'codenext-bold'
  },

  name: {
    color: '#111129'
  },
});