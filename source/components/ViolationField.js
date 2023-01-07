import React, {useState , useEffect} from 'react';
import {
    
    View, 
    Text, 
    StyleSheet, 
    TextInput

} from 'react-native';
import { Checkbox } from 'react-native-paper';
import { 
    
    DirivingUnderInfluence, 
    ExpiredLicense, 
    InvalidDocument, 
    NoLicense, 
    NoProperGear, 
    ObsturctionVehicle, 
    ORCRrelated, 
    RecklessDriving, 
    RegistrationRelated, 
    SpeedingVehicle 

} from './ViolationData';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import { setObstruction } from '../Redux/ViolationSlice';
import { setRegistration } from '../Redux/ViolationSlice';
import { setOrCr } from '../Redux/ViolationSlice';
import { setNoLicense } from '../Redux/ViolationSlice';
import { setExpiredLicense } from '../Redux/ViolationSlice';
import { setDUI } from '../Redux/ViolationSlice';
import { setAttire } from '../Redux/ViolationSlice';
import { setSpeeding } from '../Redux/ViolationSlice';
import { setReckless } from '../Redux/ViolationSlice';
import { setDocument } from '../Redux/ViolationSlice';

export const Checbox = (props) => {
  

  return (
    <Checkbox
      status={props.status}
      onPress={props.Speeding}
      color = {props.color}
      
    />
  );
};

export const ViolationField = (props) => {

    
    const dispatch = useDispatch()
    


    //vehicle related
    
    const [obstruction, _setObstruction] = useState(false);
    const [registration, _setRegistration] = useState(false);
    const [orcr, _setOrcr] = useState(false);

    //license related 
    const [nolicense, _setNoLicense] = useState(false);
    const [document, _setDocument] =  useState(false);
    const [expiredLicense, _setExpiredLicense] = useState(false);

    //Driving related
    const [dui, _setDui] = useState(false);
    const [attire, _setAttire] = useState(false);
    const [speeding, _setSpeeding] = useState(false);
    const [reckless, _setReckless] = useState(false);

    return (
      
    <View style = {{flex: 1, justifyContent: 'center', alignItems:'center'}}>
          <Text style = {{marginLeft: 10, fontSize: 20, fontWeight: '300', marginTop: 20, marginBottom: 10, alignSelf: 'flex-start'}}>Driver Related</Text>
        <View style = {{flexDirection: 'row', justifyContent: 'flex-start', width: '100%', marginLeft: 5,}}>
            
        <View style = {styles.CheckboxContainer}>
                    <Checkbox
                        
                        status = {nolicense? 'checked' : 'unchecked'}
                        onPress = {() => { 
                            _setNoLicense(!nolicense); 
                            dispatch(setObstruction(nolicense?'' : 'No License'));
                            console.log('Choosen')}}
                        style = {styles.CheckBoxStyle}
                        color = '#1240ac'
                        

                    />
                    <Text style = {styles.Text}>{NoLicense}</Text>
                    
        </View>    
        <View style = {styles.CheckboxContainer}>
                    <Checkbox
        
                        status = {expiredLicense? 'checked' : 'unchecked'}
                        onPress = {() => { 
                            
                            _setExpiredLicense(!expiredLicense); 
                            dispatch(setExpiredLicense(expiredLicense? '': 'Expired License'));
                            console.log('Choosen')
                        }}
                        style = {styles.CheckBoxStyle}
                        color = '#1240ac'

                    />
                    <Text style = {styles.Text}>{ExpiredLicense}</Text>        
        </View>
        <View style = {styles.CheckboxContainer}>
                    <Checkbox
        
                        status = {document? 'checked' : 'unchecked'}
                        onPress = {() => {
                            
                            _setDocument(!document); 
                            dispatch(setDocument(document? '': 'Document'));
                            console.log('Choosen')
                        }}
                        style = {styles.CheckBoxStyle}
                        color = '#1240ac'

                    />
                                 
        </View>
                    <Text style = {styles.Text}>{InvalidDocument}</Text>    
        <View style = {styles.CheckboxContainer}>
                    <Checkbox
        
                        status = {speeding? 'checked' : 'unchecked'}
                        onPress = {() => {
                            
                            _setSpeeding(!speeding); 
                            dispatch(setSpeeding(speeding? '': 'Speeding'));
                            console.log('Choosen')
                        }}
                        style = {styles.CheckBoxStyle}
                        color = '#1240ac'

                    />
                    <Text style = {styles.Text}>{SpeedingVehicle}</Text>    
                        
        </View>   
        </View>
        <View style = {{flexDirection: 'row', justifyContent: 'flex-start', width: '100%', marginLeft: 5,}}>
        <View style = {styles.CheckboxContainer}>
                    <Checkbox
        
                        status = {reckless? 'checked' : 'unchecked'}
                        onPress = {() => {
                            
                            _setReckless(!reckless); 
                            dispatch(setReckless(reckless? '': 'Reckless Driving'))
                            console.log('Choosen')
                        }}
                        style = {styles.CheckBoxStyle}
                        color = '#1240ac'

                    />
                    <Text style = {styles.Text}>{RecklessDriving}</Text>    
                        
        </View>   
        <View style = {styles.CheckboxContainer}>
                    <Checkbox
        
                        status = {attire? 'checked' : 'unchecked'}
                        onPress = {
                            
                            () => {_setAttire(!attire); 
                                dispatch(setAttire(attire? '': 'Attire'));
                                console.log('Choosen')
                            }}
                        style = {styles.CheckBoxStyle}
                        color = '#1240ac'
                    />
                    <Text style = {styles.Text}>{NoProperGear}</Text>    
                        
        </View> 
        <View style = {styles.CheckboxContainer}>
                    <Checkbox
        
                        status = {dui? 'checked' : 'unchecked'}
                        onPress = {() => {
                            
                            _setDui(!dui); 
                            dispatch(setDUI(dui? '' : 'DUI'))
                            console.log('Choosen')
                        }}
                        style = {styles.CheckBoxStyle}
                        color = '#1240ac'

                    />
                    <Text style = {styles.Text}>{DirivingUnderInfluence}</Text>    
                        
        </View> 
        </View>
        <Text style = {{marginLeft: 10, fontSize: 20, fontWeight: '300', marginTop: 10, marginBottom: 10, alignSelf: 'flex-start', }}>Vehicle Related</Text>
        <View style = {{flexDirection: 'row', justifyContent: 'flex-start', width: '100%', marginLeft: 5,}}>
        <View style = {styles.CheckboxContainer}>
                    <Checkbox
        
                        status = {obstruction? 'checked' : 'unchecked'}
                        onPress = {() => {
                            _setObstruction(!obstruction); 
                            dispatch(setObstruction(obstruction? '' : 'Obstruction'))
                            console.log('Choosen')
                    }}
                        style = {styles.CheckBoxStyle}
                        color = '#1240ac'

                    />
                    <Text style = {styles.Text}>{ObsturctionVehicle}</Text>
                    
        </View>    
        <View style = {styles.CheckboxContainer}>
                    <Checkbox
        
                        status = {registration? 'checked' : 'unchecked'}
                        onPress = {() => {
                            
                            _setRegistration(!registration); 
                            dispatch(setRegistration(registration? '' : 'Registration'));
                            console.log('Choosen')
                        }}
                        style = {styles.CheckBoxStyle}
                        color = '#1240ac'

                    />
                    <Text style = {styles.Text}>{RegistrationRelated}</Text>        
        </View>
        <View style = {styles.CheckboxContainer}>
                    <Checkbox
        
                        status = {orcr? 'checked' : 'unchecked'}
                        onPress = {() => {
                            _setOrcr(!orcr); 
                            dispatch(setOrCr(orcr? '' : 'ORCR'))
                            console.log('Choosen')
                        }}
                        style = {styles.CheckBoxStyle}
                        color = '#1240ac'
                    />
                    <Text style = {styles.Text}>{ORCRrelated}</Text>        
        </View>
        </View>
    </View>
    )

}

const styles = StyleSheet.create({

    Others: {
        backgroundColor: '#fffe', 
        height: 50, 
        width: '85%', 
        alignSelf: 'center',        
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

    CheckboxContainer: {
        
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    CheckBoxStyle: {
        
        justifyContent: 'center', 
        height: 50,
        alignSelf: 'flex-start'
       
    },

    Text: { 
        
        textAlign: 'left', 
        fontSize: 15,
        margin: 0,
        fontWeight: '300'

    },

})