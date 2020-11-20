import React from 'react';
import './App.css';


import PersonList from './component/PersonList';
import { Provider } from 'react-redux';
import store from './app/store/Store';


function App() {
  return (
    <Provider store={store}>
          <PersonList>
        
        </PersonList>

    </Provider>


 
  );
}

export default App;
