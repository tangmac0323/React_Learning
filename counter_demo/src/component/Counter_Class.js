import React from 'react';

class CounterClass extends React.Component {

    // declare state
    state = {
        counts: 0,
    };

    onCountClick = () => {
        this.setState((prevstate) => ({
            counts: prevstate.counts + 1,
        })

        );
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.onCountClick}>
                    counter
                </button>

                <span>
                    {this.state.counts}
                </span>
            </React.Fragment>
        )
    };
}


export default CounterClass;
