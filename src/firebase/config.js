import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB29bPioibvBkeKblLuRCsIX6SrnmtIW3M",
    authDomain: "cooking-ninja-site-b6597.firebaseapp.com",
    projectId: "cooking-ninja-site-b6597",
    storageBucket: "cooking-ninja-site-b6597.appspot.com",
    messagingSenderId: "196254545083",
    appId: "1:196254545083:web:09ea3c7ed775bde8aa659e"
  };

  // init firebase 

  firebase.initializeApp(firebaseConfig)


  // init services

  const projectFirestore = firebase.firestore()

  export {projectFirestore}
