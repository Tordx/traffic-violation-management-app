import PouchDB from 'pouchdb-react-native' ; 'pouchdb-core';

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//ACCOUNT
PouchDB.plugin(require('pouchdb-adapter-asyncstorage').default)
export const localDBAccount = new PouchDB('Account', {adapter: 'asyncstorage'})
export const remoteDBAcoount = new PouchDB('http://admin:admin@192.168.0.191:5984/z_users')

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
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//VIOLATION
PouchDB.plugin(require('pouchdb-adapter-asyncstorage').default)
export const locaDBViolation = new PouchDB('Violation', {adapter: 'asyncstorage'})
export const remoteDBViolation = new PouchDB('http://admin:admin@192.168.0.191:5984/z_violation')

 export const SyncViolation = () => {
  locaDBViolation.sync(remoteDBViolation, {
    live: true, 
    retry: true
  }).on('change', function () {
   
    locaDBViolation.allDocs({include_docs:true}).then(function(doc){
      console.log(doc)
      console.log('done syc')
  })
  }).on('error', function (err) {
    console.log(err);
  });
}