import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBBWWXSoRgnU7NNUvD08ywXDX0dFLmZACc",
    authDomain: "react-user-e5224.firebaseapp.com",
    databaseURL: "https://react-user-e5224.firebaseio.com",
    projectId: "react-user-e5224",
    storageBucket: "react-user-e5224.appspot.com",
    messagingSenderId: "329931116443",
    appId: "1:329931116443:web:b86a739781ab1c42ccdb3e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;