const displayReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return 'INCREMENT';
        case 'DECREMENT':
            return 'DECREMENT';
        default:
            return 'DEFAULT';
    }

}

export default displayReducer;