import React, { Component } from 'react';
import {Navbar} from 'react-materialize'
import {NavItem} from 'react-materialize'

class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar brand='Vagabond' left>
                    <NavItem href='get-started.html'>Sign-In</NavItem>
                    <NavItem href='components.html'>components</NavItem>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;