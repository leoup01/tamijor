import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCSBLBU0SvjhDhLOJztA8yOPEDcjL1Oqco",
    authDomain: "eventostamijor.firebaseapp.com",
    databaseURL: "https://eventostamijor.firebaseio.com",
    projectId: "eventostamijor",
    storageBucket: "eventostamijor.appspot.com",
    messagingSenderId: "824658341080"
  };

  if(!firebase.apps.length){
  	firebase.initializeApp(config);
  }

  const db = firebase.database();
  const auth = firebase.auth();

export {
  db,
  auth,
};