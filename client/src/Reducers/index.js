import { combineReducers } from 'redux';
import TestReducer from './TestReducer';
import { reducer as formReducer } from 'redux-form'

let RootReducer = combineReducers({
    testReducer: TestReducer,
    form: formReducer
});

export default RootReducer;