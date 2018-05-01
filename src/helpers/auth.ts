import { ref, firebaseAuth } from '../config/constants';

export function auth (email: string, pw: string) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser);
}

export function logout () {
  return firebaseAuth().signOut();
}

export function login (email: string, pw: string) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw);
}

export function resetPassword (email: string) {
  return firebaseAuth().sendPasswordResetEmail(email);
}

export function saveUser (user: {email: string, uid: string}) {
  return ref.child(`users1/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user);
}
