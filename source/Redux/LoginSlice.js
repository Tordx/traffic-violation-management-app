
 import { createSlice } from '@reduxjs/toolkit'

 export const LoginData = createSlice({
   name: 'logindata',
   initialState: {
    username: [],
    password: [],
    fullname: [],
   },
   reducers: {
      setUsername: (state , action ) => {
        state.username = action.payload
        console.log(action)
        console.log('user')
      },
      setPassword: (state , action ) => {
        state.password = action.payload
        console.log(action)
        console.log('password')
      },
      setFullname: (state, action) => {
        state.fullname = action.payload
        console.log(action)
        console.log('fullname')
      },
      clearData: (state) => {
        state.username = []
        state.password = []
       },
       
   }
 })
 
 // Action creators are generated for each case reducer function
 export const {setUsername , setPassword, setFullname} = LoginData.actions
 
 export default LoginData.reducer