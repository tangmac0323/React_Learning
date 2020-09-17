import React from 'react';

import { increment, decrement } from '../../app/action/store_action';
import { connect } from 'react-redux';


class HeaderNavBar extends React.Component {

    incrementOnClick() {
        this.props.increment();
    }

    decrementOnClick() {
        this.props.decrement();
    }

    render() {
        return (
            <div>
                <button onClick={this.incrementOnClick}>
                    increment
                </button>

                <br></br>

                <button onClick={this.decrementOnClick}>
                    decrement
                </button>

                <br></br>

                <div>
                    {this.props.count}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = () => {
    return {
        increment,
        decrement
    }
}
export default connect(mapStateToProps, mapDispatchToProps())(HeaderNavBar);