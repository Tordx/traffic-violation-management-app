import { configureStore } from '@reduxjs/toolkit'
import LoginSlice from './LoginSlice'
import ViolationSlice from './ViolationSlice'



export default configureStore({
    reducer: {
        login: LoginSlice,
        violation : ViolationSlice
    }
    
  })