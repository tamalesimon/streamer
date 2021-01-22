import { SIGN_IN, SIGN_OUT} from './types';

export function signIn (gId, gName) {
    return {
        type: SIGN_IN,
        payload: {
            id: gId,
            name: gName
        }
    };
}

export function signOut() {
    return {
        type: SIGN_OUT
    };
}