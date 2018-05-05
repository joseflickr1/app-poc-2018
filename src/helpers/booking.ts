import { database } from '../config/constants';

export function booking (email: string, fotograferingAv: string) {
    database.ref('booking/').set({
        email: email,
        fotograferingAv : fotograferingAv
    });
}
