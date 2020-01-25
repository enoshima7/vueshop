import firebase from 'firebase'
require('firebase/firestore')
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb528C-ymcp4xkwYSX27SmESqMdd-wlPk",
  authDomain: "vueshop-ef605.firebaseapp.com",
  databaseURL: "https://vueshop-ef605.firebaseio.com",
  projectId: "vueshop-ef605",
  storageBucket: "vueshop-ef605.appspot.com",
  messagingSenderId: "235526063922",
  appId: "1:235526063922:web:b544b51c133d44afe1392b",
  measurementId: "G-5HCPX8J9W2"
};
const db = firebase.firestore();
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export { db, fb }


