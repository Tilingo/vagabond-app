import React, { Component } from 'react';
import styled from 'styled-components'

const Navbar = styled.div`
background-color: #222;
height: 150px;
padding: 20px;
color: white;
`

class NavBar extends Component {
    render() {
        return (
            <Navbar>
                Vagabond
            </Navbar>
        );
    }
}

export default NavBar;