import React, { Component } from 'react'
import HomeParallax from './ParallaxHome'
import CityList from './CityList';

class Homepage extends Component {
    render() {
        return (
            <div>
                <HomeParallax />
                <CityList />
            </div>
        );
    }
}

export default Homepage