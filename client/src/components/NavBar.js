import React, { Component } from 'react';
import styled from 'styled-components'

const Navbar = styled.div`
    background-color: #E28462;
    color: #E9D05A;
    height: 75px;
    padding: 10px;
    margin: 0 0 10px 0;
    border-bottom: 10px solid #F7C749;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Title = styled.div`
    margin: 0 0 0 10px;
    font-size: 24pt;
`
const Navigation = styled.div`
    margin: 0 10px 0 0;
`

class NavBar extends Component {
    render() {
        return (
            <Navbar>
                <Title>
                    Vagabond
                </Title>
                <Navigation>
                    Links go in here
                </Navigation>
            </Navbar>
        );
    }
}

export default NavBar;