import { combineReducers } from 'redux';
import counterReducer from './store_reducer';

export default combineReducers({
    count: counterReducer,
});