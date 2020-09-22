import { combineReducers } from 'redux';
import counterReducer from './counter_reducer';
import displayReducer from './display_reducer';

export default combineReducers({
    count: counterReducer,
    display: displayReducer,
});