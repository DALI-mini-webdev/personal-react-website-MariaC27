import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({

apiKey: "AIzaSyAUhI8BaKUvv6U0d3Wv8ofegDBH847koVE",
authDomain: "commentboard-b2662.firebaseapp.com",
projectId: "commentboard-b2662",
storageBucket: "commentboard-b2662.appspot.com",
messagingSenderId: "793587983765",
appId: "1:793587983765:web:b487e439b65e07e602029c",
measurementId: "G-NNLKZFPZEN"
});


const db = firebase.firestore();


export default {
  firebase, db
}