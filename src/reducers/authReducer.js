import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    gId: null,
    gName: null
};
const authReducer = (state={INITIAL_STATE}, action) => {
    switch (action.type) {
        case SIGN_IN:
          return {...state, isSignedIn: true, gId:action.payload.gId, gName:action.payload.gName};    
        case SIGN_OUT:
            return {...state, isSignedIn: false, gId: null, gName: null} ;

        default:
            return state;
    }
};

export default authReducer;