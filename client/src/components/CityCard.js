import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class CityCard extends Component {

    render() {
        return (
            <Link to={`/cities/${this.props.id}`}>
                <img src={this.props.photo_url} alt={this.props.name}/>
                <h2>{this.props.name}</h2>
            </Link>
        );
    }
}

export default CityCard