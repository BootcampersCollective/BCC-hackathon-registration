import firebase from 'firebase/app';
import 'firebase/firestore';
import FIREBASE_CONFIG from './firebase.config';
const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
export const db = firebase.firestore();
export default firebaseApp;
