import React, {useState} from 'react';
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


    //vehicle related
    
    const [obstruction, setObstruction] = useState(false);
    const [registration, setRegistration] = useState(false);
    const [orcr, setOrcr] = useState(false);

    //license related 
    const [nolicense, setNoLicense] = useState(false);
    const [document, setDocument] =  useState(false);
    const [expiredLicense, setExpiredLicense] = useState(false);

    //Driving related
    const [dui, setDui] = useState(false);
    const [attire, setAttire] = useState(false);
    const [speeding, setSpeeding] = useState(false);
    const [reckless, setReckless] = useState(false);


        props.obstruction(obstruction)
        props.registration(registration)
        props.orcr(orcr)
        props.nolicense(nolicense)
        props.document(document)
        props.expiredLicense(expiredLicense)
  

    return (
      
    <View style = {{flex: 1, justifyContent: 'center', alignItems:'center'}}>
          <Text style = {{marginLeft: 10, fontSize: 20, fontWeight: '300', marginTop: 20, marginBottom: 10, alignSelf: 'flex-start'}}>Driver Related</Text>
        <View style = {{flexDirection: 'row', justifyContent: 'flex-start', width: '100%'}}>
            
        <View style = {styles.CheckboxContainer}>
                    <Checkbox
                        
                        status = {nolicense? 'checked' : 'unchecked'}
                        onPress = {() => setNoLicense(!nolicense)}
                        style = {styles.CheckBoxStyle}
                        color = '#a11'
                        

                    />
                    <Text style = {styles.Text}>{NoLicense}</Text>
                    
        </View>    
        <View style = {styles.CheckboxContainer}>
                    <Checkbox
        
                        status = {expiredLicense? 'checked' : 'unchecked'}
                        onPress = {() => setExpiredLicense(!expiredLicense)}
                        style = {styles.CheckBoxStyle}
                        color = '#a11'

                    />
                    <Text style = {styles.Text}>{ExpiredLicense}</Text>        
        </View>
        <View style = {styles.CheckboxContainer}>
                    <Checkbox
        
                        status = {document? 'checked' : 'unchecked'}
                        onPress = {() => setDocument(!document)}
                        style = {styles.CheckBoxStyle}
                        color = '#a11'

                    />
                                 
        </View>
                    <Text style = {styles.Text}>{InvalidDocument}</Text>    
        <View style = {styles.CheckboxContainer}>
                    <Checkbox
        
                        status = {speeding? 'checked' : 'unchecked'}
                        onPress = {() => setSpeeding(!speeding)}
                        style = {styles.CheckBoxStyle}
                        color = '#a11'

                    />
                    <Text style = {styles.Text}>{SpeedingVehicle}</Text>    
                        
        </View>   
        </View>
        <View style = {{flexDirection: 'row', justifyContent: 'flex-start', width: '100%'}}>
        <View style = {styles.CheckboxContainer}>
                    <Checkbox
        
                        status = {reckless? 'checked' : 'unchecked'}
                        onPress = {() => setReckless(!reckless)}
                        style = {styles.CheckBoxStyle}
                        color = '#a11'

                    />
                    <Text style = {styles.Text}>{RecklessDriving}</Text>    
                        
        </View>   
        <View style = {styles.CheckboxContainer}>
                    <Checkbox
        
                        status = {attire? 'checked' : 'unchecked'}
                        onPress = {() => setAttire(!attire)}
                        style = {styles.CheckBoxStyle}
                        color = '#a11'

                    />
                    <Text style = {styles.Text}>{NoProperGear}</Text>    
                        
        </View> 
        <View style = {styles.CheckboxContainer}>
                    <Checkbox
        
                        status = {dui? 'checked' : 'unchecked'}
                        onPress = {() => setDui(!dui)}
                        style = {styles.CheckBoxStyle}
                        color = '#a11'

                    />
                    <Text style = {styles.Text}>{DirivingUnderInfluence}</Text>    
                        
        </View> 
        </View>
        <Text style = {{marginLeft: 10, fontSize: 20, fontWeight: '300', marginTop: 20, marginBottom: 10, alignSelf: 'flex-start'}}>Vehicle Related</Text>
        <View style = {{flexDirection: 'row', justifyContent: 'flex-start', width: '100%'}}>
        <View style = {styles.CheckboxContainer}>
                    <Checkbox
        
                        status = {obstruction? 'checked' : 'unchecked'}
                        onPress = {() => setObstruction(!obstruction)}
                        style = {styles.CheckBoxStyle}
                        color = '#a11'

                    />
                    <Text style = {styles.Text}>{ObsturctionVehicle}</Text>
                    
        </View>    
        <View style = {styles.CheckboxContainer}>
                    <Checkbox
        
                        status = {registration? 'checked' : 'unchecked'}
                        onPress = {() => setRegistration(!registration)}
                        style = {styles.CheckBoxStyle}
                        color = '#a11'

                    />
                    <Text style = {styles.Text}>{RegistrationRelated}</Text>        
        </View>
        <View style = {styles.CheckboxContainer}>
                    <Checkbox
        
                        status = {orcr? 'checked' : 'unchecked'}
                        onPress = {() => setOrcr(!orcr)}
                        style = {styles.CheckBoxStyle}
                        color = '#a11'

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