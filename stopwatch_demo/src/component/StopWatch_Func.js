import React from 'react';
import {useState, useEffect} from 'react';

const StopWatchFunc = () => {


    const [timeTimer, setTimer] = useState(0);
    const [isTiming, toggleTimer] = useState(false);

    const [timer, cacheTimer] = useState(null);

    useEffect(() => {
        console.log(timeTimer);
    },[timeTimer]);

    // useEffect(() => {
    //     let interval = null;
    //     if (isTiming) {
    //       interval = setInterval(() => {
    //         setTimer(timeTimer => timeTimer + 1);
    //       }, 1000);
    //     } else if (!isTiming && timeTimer !== 0) {
    //       clearInterval(interval);
    //     }
    //     return () => clearInterval(interval);
    // }, [isTiming, timeTimer]);


    const onClickToggle = () => {
        if (!isTiming) {
            cacheTimer(setInterval(() => {
                setTimer(timeTimer => timeTimer + 1);
                
            }, 1000));
        }
        else{
            clearInterval(timer);
        }

        toggleTimer(!isTiming);

        //console.log(`${isTiming}`);
        //console.log(`${timeTimer}`);
    }

    const onClickReset = () => {
        setTimer(0);
        clearInterval(timer);
        toggleTimer(false);
    };

    // const onClickToggle = () => {
    //     toggleTimer(!isTiming);
    // };

    return (
        <div>
            <button onClick={onClickToggle}>
                {isTiming? 'PAUSE' : 'START'}
            </button>
            <button onClick={onClickReset}>
                RESET
            </button>
            <div>
                {timeTimer} seconds have elapsed since mounting.
            </div>
        </div>
    );
};


export default StopWatchFunc;