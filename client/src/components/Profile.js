import React, { Component } from 'react'
import styled from 'styled-components'
import Navbar from '../../node_modules/react-materialize/lib/Navbar';
import ProfileSidebar from './ProfileSidebar';

const WholeProfile = styled.div`
    display: flex;
    flex-align: row;
`

class Profile extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <WholeProfile>
                    <ProfileSidebar />
                    <ProfileBio>
                        lorem ipsum stuff
                    </ProfileBio>
                </WholeProfile>
            </div>
        )
    }
}

export default Profile