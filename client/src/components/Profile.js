import React, {Component} from 'react'
import styled from 'styled-components'
import Navbar from '../../node_modules/react-materialize/lib/Navbar';
import ProfileSidebar from './ProfileSidebar';

class Profile extends Component {
    render() {
        return (
            <Navbar />
            <ProfileSidebar />
        )
    }
}

export default Profile