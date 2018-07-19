import React, { Component } from 'react'
import styled from 'styled-components'

const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 10px solid #F7C749;
    padding: 100px 0;
    color: #E9D05A;
    background-color: #815F6D;
    width: 30%;
    max-width: 300px;
    min-width: 200px;
`
const SidebarContent = styled.div`
    position: fixed;
`
const Image = styled.div``
const About = styled.div`
    display: flex;
    flex-direction: column;
`
class ProfileSidebar extends Component {
    render() {
        return (
            <Sidebar>
                <SidebarContent>
                    <Image>
                        <img width="150" height="150" src="http://www.placecage.com/c/100/100" />
                    </Image>
                    <About>
                        <p>
                            Name
                        </p>
                        <p>
                            Date joined
                        </p>
                        <p>
                            Current city
                        </p>
                        {/* If on YOUR profile page, show 'edit' */}
                </About>
                </SidebarContent>
            </Sidebar>
        )
    }
}

export default ProfileSidebar