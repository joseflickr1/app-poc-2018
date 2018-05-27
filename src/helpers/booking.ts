import { firebaseAuth, ref } from '../config/constants';

export function booking (dato: string, navn: string, fotograferingAv: string, userId: string) {
    const date = new Date();
    ref.child('booking/' + userId + '/' + date.toDateString() + ' ' + date.toLocaleTimeString()).set({
        dato:  dato,
        navn: navn,
        fotograferingAv : fotograferingAv
    });
    ref.child('calender/' + date.toDateString() + ' ' + date.toLocaleTimeString()).set({
        dato:  dato,
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
