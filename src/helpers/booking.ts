import { ref } from '../config/constants';

export function booking (email: string, fotograferingAv: string, userId: string) {
    const date = new Date();
    ref.child('booking/' + userId + '/' + date.toDateString() + ' ' + date.toLocaleTimeString()).set({
        email: email,
        fotograferingAv : fotograferingAv
    });
}
