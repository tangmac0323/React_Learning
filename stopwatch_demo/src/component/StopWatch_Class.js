import React from 'react';

import {useEffect, useState} from 'react';

class StopWatchClass extends React.Component {

    

    state = {
        timerStart: 0,
        timerTime: 0,
        isCounting: false,
        intervalID: 0,
    };


    incrementTimer = () => {
        
        console.log(this.state.intervalID);
        //console.log(this.state.isCounting);

        this.setState((prevState) => (
            {
                timerTime: prevState.timerTime + 1
            }
        ));
    }

    onClickReset = () => {

        console.log("reset timer")
        clearInterval(this.state.intervalID);
        this.setState((prevState) => (
            {
                // timerTime: prevState.timerTime + 1
                timerTime: 0,
                isCounting: false,
            }
        ));


    };

    onClickToggle = () => {

        if (this.state.isCounting) {
            console.log("pause timer");
            clearInterval(this.state.intervalID);
        }
        else {
            console.log("start timer");
            this.setState({
                intervalID: setInterval(this.incrementTimer, 1000),
            });
        }

        this.setState((prevState) => ({
            isCounting: !prevState.isCounting
        }));

        //console.log(this.state.intervalID);
        //console.log(this.state.isCounting);



    };

    render() {
        return (
            <div>
            {
                this.state.isCounting && 
                <button onClick={this.onClickToggle}>
                    PAUSE
                </button>
            }

            {
                !this.state.isCounting && 
                <button onClick={this.onClickToggle}>
                    START
                </button>
            }

            <button onClick={this.onClickReset}>
                RESET
            </button>

            <div>
                {this.state.timerTime} seconds have elapsed since mounting.
            </div>
                
            </div>
          );
    };

    
}

export default StopWatchClass;