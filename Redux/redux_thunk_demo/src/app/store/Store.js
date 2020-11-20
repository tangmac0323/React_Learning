import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/Root_Reducer';
//import GetPersonList_Reducer from '../reducers/GetPersonList_Reducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));
//const store = createStore(GetPersonList_Reducer);

export default store;