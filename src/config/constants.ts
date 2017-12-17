import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBUfwN3Q7s0YEyqtf7iA3PDBLAz4yDptlQ',
  authDomain: 'poc-fr-web.firebaseapp.com',
  databaseURL: 'https://poc-fr-web.firebaseio.com',
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;