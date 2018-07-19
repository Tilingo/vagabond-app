import React, { Component } from 'react'
import { Card, Col, CardTitle } from 'react-materialize'
import Row from '../../node_modules/react-materialize/lib/Row';

class UserComment extends Component {
    render() {
        return (
            <div>
                <Row>
                    <div l={2} className='grid-example'>
                        <Col m={4} s={12}>
                            <Card horizontal header={<CardTitle image="https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png"></CardTitle>} actions={[<a href='#'>This is a link</a>]}>
                                <p>I am a very simple card. I am good at containing small bits of information</p>
                            </Card>
                        </Col>
                    </div>
                </Row>
            </div>
        );
    }
}

export default UserComment;