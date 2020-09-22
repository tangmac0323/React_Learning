import React from 'react';
import { useSelector } from 'react-redux';
import { useStore } from 'react-redux';
import { createSelector } from 'reselect';

import ReduxThunk from 'redux-thunk';

const FooterNavBar = () => {

    //const counter = useSelector(state => state.count);
    const counter = useSelector(evenSelector);

    const store = useStore();

    return (
        <div>
            {counter}
            {console.log("Store: " + store.getState())}
        </div>
    )
}


const stateCountSelector = (state) => {
    return state.count;
}

const evenSelector = createSelector(
    stateCountSelector,
    count => count = count % 2 === 0 ? count : 0
);

const justATest = () => {
    return (dispatch, getState) => {
        const { counter } = getState();
    
        if (counter % 2 === 0) {
          return;
        }
    
        dispatch(console.log('just a test =)'));
      };
}



export { FooterNavBar };



