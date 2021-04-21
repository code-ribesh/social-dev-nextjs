import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyASX6LqlaTI7rwQZUtxn7rWXqDuXZF283o',
  authDomain: 'social-dev-12141.firebaseapp.com',
  projectId: 'social-dev-12141',
  storageBucket: 'social-dev-12141.appspot.com',
  messagingSenderId: '749864593505',
  appId: '1:749864593505:web:164ddcfc5bb5f9957b6220',
  measurementId: 'G-Z4TV9GV8KB',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
//auth export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();
