//import cx from 'classnames';
import React, { Component } from 'react';

export default class LikeButton extends Component {

    state = {
        liked: false,
        base: 100,
    }

    likeClick = () => {
        this.setState((prev) => ({
            liked: !prev.liked,
            base: prev.base + (prev.liked ? -1 : 1),
        }));
    }

    render() {
        return (
            <>
                <div>
                    <h2>
                        <button className={this.state.liked ? 'like-button liked' : 'like-button'} onClick={() => this.likeClick()}>
                            Like | {this.state.base}
                        </button>
                    </h2>
                </div>
                <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
            </>
        );
    }
}