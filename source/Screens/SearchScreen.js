import React, { useEffect, useState } from 'react';
import { 
  
  View, 
  Text, 
  TextInput, 
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,

} from 'react-native';
import { Backbutton, CloseButton } from '../components/buttons'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { remoteDBViolation } from '../Database/pouchDB';


export default function SearchScreen() {

  const navigation = useNavigation()
  const { username } = useSelector((store) => store.login);
  const [newSearch, setNewSearch] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    rendertickets();
  }, [searchTerm]);

  const rendertickets = async () => {
    var result = await remoteDBViolation.allDocs({
      include_docs: true,
      attachments: true,
    });
    if (result.rows) {
      let modifiedArr = result.rows.map(function(item) {
        return item.doc;
      });
      let filteredData = modifiedArr.filter((item) => {
        return item.UserName === username && 
        (new RegExp(searchTerm, 'i').test(item.refNum) ||
        new RegExp(searchTerm, 'i').test(item.DriverName) 
        )
      });
      if (filteredData) {
        let newFilterData = filteredData.map((item) => {
          return item;
        });
        setNewSearch(newFilterData);
      }
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.nativeEvent.text);
  };

  const renderitem = ({item}) => {
    return (
      <View style={styles.item}> 
      <TouchableOpacity>
        <Text style={styles.title}># {item.refNum}</Text>
        <Text style={styles.name}>{item.DriverName}</Text>
      </TouchableOpacity>
      
    </View>
    )
  }

  return (
    <View style = {styles.container}>
      
      
      {newSearch ? (
        <FlatList
          data={newSearch}
          renderItem={renderitem}
          keyExtractor={(item) => item._id}
        />
      ) : (
        <ActivityIndicator size="large" color="#1240ac"/>
      )}
      <View style  = {{
        backgroundColor: '#1240ac',
        position: 'absolute',
        top: 0, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%', height: 75,}}>
      <Backbutton
      onPress = {() => navigation.navigate('Ticketing')}
      />
      <TextInput style = {styles.InputContainer} value={searchTerm} onChange={handleSearchChange} placeholder = "Search by Name, Reference Number...." />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '20%',
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

  InputContainer: { 
    
    width: '80%',
    backgroundColor: '#fffe',
    alignItems: 'center', 
    marginVertical: 17, 
    borderRadius: 5, 
    flexDirection: 'row',
    borderWidth: 0.3,
    borderColor: '#c1cde0',
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 1,
    },
    shadowOpacity: 0.36,
    shadowRadius: 1,
    elevation: 1,
},
});