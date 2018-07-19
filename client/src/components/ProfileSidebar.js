import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

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
    a {
        color: #E9D05A;
    }
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
                    <Link to={`/users/${this.props.id}`}>
                        <Image>
                            <img width="150" height="150" 
                            src ="http://www.placecage.com/c/150/150"
                            // src={this.props.profile_picture} alt={this.props.name} 
                            />
                        </Image>
                        <About>
                            <p>
                                Dummy Name
                            {/* {this.props.name} {this.props.last_name} */}
                            </p>
                            <p>
                                Date Joined:
                            {/* {this.props.timestamp}
                            date joined? */}
                            </p>
                            <p>
                                Current City:
                            {/* {this.props.current_city} */}
                            </p>
                            {/* If on YOUR profile page, show 'edit' */}
                        </About>
                    </Link>
                </SidebarContent>
            </Sidebar>
        )
    }
}

export default ProfileSidebar