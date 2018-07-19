import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SingleCard = styled.div`
    width: 25vw;
    border: 5px solid rgb(38, 23, 66);
    margin: 0 auto;
    img {
        max-height: 20vh;
        max-width: 20vw;
        margin: 0 auto;
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