import { remoteRN } from "../Database/pouchDB";
import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";


export default function RnfGenerator() {
    

    const dispatch = useDispatch();
   
    const [generateRN, setGenerateRN] = useState();


    const generateReferenceNumber = async() => {
        var result = await remoteRN.allDocs({
            include_docs: true,
            attachments: true
        });
            if(result.rows){
                let modifiedArr = result.rows.map(function(item){
                    return item.doc
                });
                let filteredData = modifiedArr.filter(item => {
                    return item
                });
                    if(filteredData) {
                        let newFilterData = filteredData.map(item => {
                        return item
                    })
                        setGenerateRN(newFilterData)
                    }
            }  
    }

    useEffect(() => {
        generateReferenceNumber()
        dispatch(setGenerateRN(generateRN));
    },[])

}
