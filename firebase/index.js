import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'



const firebaseConfig = {
    apiKey: "AIzaSyC89Hdt1UvXG7PoCM2mbRdwz5F_fGFcLVE",
    authDomain: "libraryapp-9d522.firebaseapp.com",
    projectId: "libraryapp-9d522",
    storageBucket: "libraryapp-9d522.appspot.com",
    messagingSenderId: "906262558332",
    appId: "1:906262558332:web:39eca53d542bb8da1afbf9",
    measurementId: "G-1XBG12MMY3"
  };


  initializeApp(firebaseConfig);
  const db= getFirestore();
  const storage= getStorage();

  export {db,storage}

