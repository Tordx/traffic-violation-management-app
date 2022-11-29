import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Checkbox } from 'react-native-paper';
import { ExpiredLicense, InvalidDocument, NoLicense, ObsturctionVehicle, ORCRrelated, RegistrationRelated } from './ViolationData';


export const Checbox = (props) => {
  

  return (
    <Checkbox
      status={props.status}
      onPress={props.Speeding}
      color = {props.color}
    />
  );
};

export const ViolationField = () => {

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

    return (
      
    <View style = {{flex: 1}}>
          <Text style = {{marginLeft: 10, fontSize: 20, fontWeight: '300'}}>License Related</Text>
        <View style = {{flexDirection: 'row', justifyContent: 'flex-start',}}>
            
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
                    <Text style = {styles.Text}>{InvalidDocument}</Text>        
        </View>
        </View>
        <Text style = {{marginLeft: 10, fontSize: 20, fontWeight: '300'}}>Vehicle Related</Text>
        <View style = {{flexDirection: 'row', justifyContent: 'flex-start',}}>
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
        fontSize: 16,
        margin: 5,
        fontWeight: '300'

    },

})