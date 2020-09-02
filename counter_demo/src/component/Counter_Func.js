import React from 'react';
import {useState, useEffect} from 'react';

const CounterFunc = () => {

    const [count, setCount] = useState(0);

    const onClickCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={onClickCount}>
                 Count
            </button>
            <div>
                current counts:{count}
            </div>
        </div>
    );
};

export default CounterFunc;



