import React, { Component } from 'react';
import HomeParallax from './ParallaxHome';
import CommentList from './CommentList';

class CityPage extends Component {
    render() {
        return (
            <div>
                <HomeParallax />
                <CommentList />
            </div>
        );
    }
}

export default CityPage;