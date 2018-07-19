import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SingleCard = styled.div`
    width: 25vw;
    img {
        max-height: 300px;
        max-width: 300px;
    }
`

class CityCard extends Component {

    render() {
        return (
            <SingleCard>
                <Link to={`/cities/${this.props.id}`}>
                    <img src={this.props.photo_url} alt={this.props.name} />
                    <h2>{this.props.name}</h2>
                </Link>
            </SingleCard>
        );
    }
}

export default CityCard