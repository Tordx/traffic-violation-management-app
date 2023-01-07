
 import { createSlice } from '@reduxjs/toolkit'

 export const ViolationData = createSlice({
   name: 'violationdata',
   initialState: {
    obstruction: [],
    registration: [],
    orcr: [],
    nolicense: [],
    expiredLicense: [],
    dui: [],
    attire: [],
    speeding: [],
    reckless: [],
    document: [],
    signaturedata: [],
   },
   reducers: {
    setObstruction: (state , action ) => {
        state.obstruction = action.payload
        console.log(action)
        console.log('user')
      },
      setRegistration: (state , action ) => {
        state.registration = action.payload
        console.log(action)
        console.log('registration')
      },
      setOrCr: (state , action ) => {
        state.orcr = action.payload
        console.log(action)
        console.log('orcr')
      },
      setNoLicense: (state , action ) => {
        state.nolicense = action.payload
        console.log(action)
        console.log('nolicense')
      },
      setExpiredLicense: (state , action ) => {
        state.expiredLicense = action.payload
        console.log(action)
        console.log('expiredLicense')
      },
      setDUI: (state , action ) => {
        state.dui = action.payload
        console.log(action)
        console.log('dui')
      },
      setAttire: (state , action ) => {
        state.attire = action.payload
        console.log(action)
        console.log('attire')
      },
      setSpeeding: (state , action ) => {
        state.speeding = action.payload
        console.log(action)
        console.log('speeding')
      },
      setReckless: (state , action ) => {
        state.reckless = action.payload
        console.log(action)
        console.log('reckless')
      },
      setDocument: (state , action ) => {
        state.document = action.payload
        console.log(action)
        console.log('document')
      },
      setSignatureData: (state , action ) => {
        state.signaturedata = action.payload
        console.log(action)
        console.log('SignatureData')
      },
   }
 })
 
 // Action creators are generated for each case reducer function
 export const {
 setObstruction ,
 setRegistration , 
 setOrCr,
 setNoLicense,
 setExpiredLicense,
 setDUI,
 setAttire,
 setSpeeding,
 setReckless,
 setDocument,
 setSignatureData,
 } = ViolationData.actions
 
 export default ViolationData.reducer