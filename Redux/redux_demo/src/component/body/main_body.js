import React from 'react';
import { useStore } from 'react-redux';

const MainBody = () => {

    const a = justATest();

    console.log(a);

    const store = useStore();

    store.subscribe(() => {
        document.getElementById('main_body').innerHTML = "whats up + " + store.getState().count;
    });


    return (

            <div id='main_body'>
                body
            </div>

    );
}

const justATest = () => {
    return (dispatch, getState) => {
        const { counter } = getState();
    
        if (counter % 2 === 0) {
          return;
        }
    
        dispatch(dispatchAction());
      };
}


const getState = () => {
    console.log('getState()');

    return 4;
}

const dispatchAction = () => {
    console.log('just a test =)');
}

export default MainBody;