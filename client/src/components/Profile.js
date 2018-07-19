import React, { Component } from 'react'
import styled from 'styled-components'
import ProfileSidebar from './ProfileSidebar';

const WholeProfile = styled.div`
    display: flex;
    flex-align: row;
`
const ProfileBio = styled.div`
    background: grey;
`

class Profile extends Component {
    render() {
        return (
            <div>
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