import React, { Component } from 'react';
import CityCard from './CityCard';
import axios from 'axios'
import styled from 'styled-components'

const CityCards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 100vw;
`

class CityList extends Component {

    state = {
        cities: []
    }

    componentDidMount = async () => {
        try {
            let cities = await axios.get('/api/cities')

            this.setState({
                cities: cities.data
            })
        } catch (err) {
            console.error(err)
        }
    }

    render() {

        const cities = this.state.cities.map((city, i) => {
            return(
                <CityCard
                key={i}
                id={city.id}
                photo_url={city.photo_url}
                name={city.name}/>
            )
        })

        return (
            <CityCards>
                {cities}
            </CityCards>
        );
    }
}

export default CityList;