import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: 'AIzaSyANK-rcntyJbtmL04dY0ZNu8QSZc42ZXKQ',
    authDomain: 'hjelptilfotografering.firebaseapp.com',
    databaseURL: 'https://hjelptilfotografering.firebaseio.com',
    projectId: 'hjelptilfotografering',
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
