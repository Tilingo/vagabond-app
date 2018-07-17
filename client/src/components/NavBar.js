import React, { Component } from 'react';
import styled from 'styled-components'

const Navbar = styled.div`
    background-color: rgba(38, 23, 66, .33);
    color: #E9D05A;
    text-shadow: -1px 0 #261742, 0 1px #261742, 1px 0 #261742, 0 -1px #261742;
    height: 75px;
    width: 100%;
    padding: 10px;
    border-bottom: 10px solid #F7C749;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
`
const Title = styled.div`
    margin: 0 0 0 10px;
    font-size: 24pt;
    font-weight: 600;
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