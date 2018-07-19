import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
    a {
        color: #E9D05A;
    }
`
const Title = styled.div`
    margin: 0 0 0 10px;
    font-size: 24pt;
`
const Navigation = styled.div`
    margin: 0 10px 0 0;
    display: flex;
    flex-direction: row;
    align-items: space-between;
    justify-content: space-between;
`
const NavigationItem = styled.div`
    margin: 5px;
`


class NavBar extends Component {
    render() {
        return (
            <Navbar>
                <Title><Link to={`/`}>Vagabond</Link></Title>
                <Navigation>
                    <NavigationItem>
                        <Link to={`/users/1`}>Profile</Link>
                    </NavigationItem>
                    <NavigationItem>
                        Sign Out
                        </NavigationItem>
                </Navigation>
            </Navbar>
        );
    }
}

export default NavBar;