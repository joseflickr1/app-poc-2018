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
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user);
}

export const isAuthenticated = () => {
    return !!firebaseAuth().currentUser;
};

// Hent e-posten
export const hentEpost = () => {
    const user = firebaseAuth().currentUser;
    return user ? user.email || '' : 'Hei';
};

export const hentForsteBokstavEpost = () => {
    const user = firebaseAuth().currentUser;
    const epost = user ? user.email || '' : 'Hei';

    return epost.substring(0, 1);
};