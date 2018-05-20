import { ref } from '../config/constants';

export function booking (navn: string, fotograferingAv: string, userId: string) {
    const date = new Date();
    ref.child('booking/' + userId + '/' + date.toDateString() + ' ' + date.toLocaleTimeString()).set({
        navn: navn,
        fotograferingAv : fotograferingAv
    });
}
