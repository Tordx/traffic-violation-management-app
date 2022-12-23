import { createSlice } from "@reduxjs/toolkit";
import { ActionSheetIOS } from "react-native";

export const  ReferenceNumber = createSlice({

    name: 'ReferenceNumber',
    initialState: {

        generateRN: false,

    },
    
        reducers: {
            setGenerateRN: (state, action) => {
                state.generateRN = action.payload
                console.log(action)
                console.log('user')
            }
        }

})

export const {

    generateRN

} = ReferenceNumber.actions

export default ReferenceNumber.reducer