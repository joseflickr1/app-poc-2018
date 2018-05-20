import { firebaseAuth, ref } from '../config/constants';

export function booking (navn: string, fotograferingAv: string, userId: string) {
    const date = new Date();
    ref.child('booking/' + userId + '/' + date.toDateString() + ' ' + date.toLocaleTimeString()).set({
        navn: navn,
        fotograferingAv : fotograferingAv
    });
}

export function hentBooking () {
    const user = firebaseAuth().currentUser;
    // tslint:disable
    if (user) {
        return ref.child('booking/' + user.uid).once('value')
    } else {
        return Promise.resolve()
    }

}
