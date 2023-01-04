import { configureStore } from '@reduxjs/toolkit'
import LoginSlice from './LoginSlice'
import TicketSlice from './TicketSlice'
import ViolationSlice from './ViolationSlice'



export default configureStore({
    reducer: {
        login: LoginSlice,
        violation : ViolationSlice,
        ticket: TicketSlice,
    }
    
  })