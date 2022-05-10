import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDmGgtUcvGjU3NW_Kf2eI7VaavCtvW_vzM',
  authDomain: 'nextfire-13191.firebaseapp.com',
  projectId: 'nextfire-13191',
  storageBucket: 'nextfire-13191.appspot.com',
  messagingSenderId: '925007896779',
  appId: '1:925007896779:web:cccc217adabd962af1fb4e',
  measurementId: 'G-8BDGW4EC54',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
