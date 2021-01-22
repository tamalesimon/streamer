import { combineReducers } from 'redux';
import authReducer from './authReducer';

/* const rootReducer = combineReducers ({

});

export default rootReducer; */

export default combineReducers({
    authReducer: authReducer //key is authReducer
});