import PouchDB from 'pouchdb-react-native' ; 'pouchdb-core';

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//SCHEDULES
PouchDB.plugin(require('pouchdb-adapter-asyncstorage').default)
export const localDBAccount = new PouchDB('Account', {adapter: 'asyncstorage'})
export const remoteDBAcoount = new PouchDB('http://admin:1234@192.168.0.199:5984/trafficaccount')

 export const SyncAccount = () => {
    localDBAccount.sync(remoteDBAcoount, {
    live: true, 
    retry: true
  }).on('change', function () {
   
    localDBAccount.allDocs({include_docs:true}).then(function(doc){
      console.log(doc)
      console.log('done syc')
  })
  }).on('error', function (err) {
    console.log(err);
  });
}