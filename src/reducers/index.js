import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';

/* const rootReducer = combineReducers ({

});

export default rootReducer; */

export default combineReducers({
    authReducer: authReducer, //key is authReducer
    form: formReducer
});