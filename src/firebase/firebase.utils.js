import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyB-WiQfTwXwsPebC58xQ7aSfraiPfvZl8E",
    authDomain: "crwn-db-f80ea.firebaseapp.com",
    projectId: "crwn-db-f80ea",
    storageBucket: "crwn-db-f80ea.appspot.com",
    messagingSenderId: "589789914506",
    appId: "1:589789914506:web:02430ad98b04d5e7dd9473",
    measurementId: "G-1NK690BM9K"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;