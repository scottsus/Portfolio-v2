import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDR6v2EQdiMuubOEU-e2BGdn8t6PAKdkw8',
  authDomain: 'susanto-portfolio-v2.firebaseapp.com',
  projectId: 'susanto-portfolio-v2',
  storageBucket: 'susanto-portfolio-v2.appspot.com',
  messagingSenderId: '1085097720223',
  appId: '1:1085097720223:web:47a516a99dc2b1a43325aa',
  measurementId: 'G-TZY3Q1030Y',
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
