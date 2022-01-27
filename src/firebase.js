import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCR1CW6SZQn3p6TMi5hwJpy0lw3F2LkYO8",
    authDomain: "challenge-ed072.firebaseapp.com",
    projectId: "challenge-ed072",
    storageBucket: "challenge-ed072.appspot.com",
    messagingSenderId: "939127309373",
    appId: "1:939127309373:web:9b0c06132ff0e266441654",
    measurementId: "G-Y51SFQ39W3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };