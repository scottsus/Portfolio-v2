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

const newFirebaseConfig = {
  apiKey: 'AIzaSyD2SiUeqFtszLc7vHhyIb7TQ5r0lmLw4MM',
  authDomain: 'portfolio-guestbook-373721.firebaseapp.com',
  projectId: 'portfolio-guestbook-373721',
  storageBucket: 'portfolio-guestbook-373721.appspot.com',
  messagingSenderId: '608968069585',
  appId: '1:608968069585:web:ea90b6650682c74ae850f0',
  measurementId: 'G-0Y6DNBS1NJ',
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
