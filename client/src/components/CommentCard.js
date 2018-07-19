import React, { Component } from 'react';

class CommentCard extends Component {
    render() {
        return (
            <div>
                {/* <img src={this.props.image} alt=""/> */}
                <div>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.content}</p>
                </div>
            </div>
        );
    }
}

export default CommentCard;