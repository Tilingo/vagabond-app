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
    font-family: 'Fauna One', serif;
`
const Title = styled.div`
    margin: 0 0 0 10px;
    font-size: 24pt;
`
const Navigation = styled.div`
    margin: 0 10px 0 0;
    display: flex-row;
`


class NavBar extends Component {
    render() {
        return (
            <Navbar>
                <Title>Vagabond</Title>
                <Navigation>
                    <ul>
                        <li>Sign up</li>
                        <li>Log in</li>
                    </ul>
                </Navigation>
            </Navbar>
        );
    }
}

export default NavBar;