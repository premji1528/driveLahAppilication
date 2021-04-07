import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import { reducer as formReducer } from 'redux-form'

let RootReducer = combineReducers({
    homeReducer: HomeReducer,
    form: formReducer
});

export default RootReducer;