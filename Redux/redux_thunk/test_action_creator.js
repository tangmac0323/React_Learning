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

const a = justATest();

console.log(a);