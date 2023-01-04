import { createSlice } from "@reduxjs/toolkit";

export const  TicketData = createSlice({

    name: 'TicketData',
    initialState: {

        selectedTicket: [],

    },
    
        reducers: {
            setSelectedTicket: (state, action) => {
                state.selectedTicket = action.payload
                console.log(action)
                console.log('selectedTicket')
            }
        }

})

export const {

    setSelectedTicket

} = TicketData.actions

export default TicketData.reducer