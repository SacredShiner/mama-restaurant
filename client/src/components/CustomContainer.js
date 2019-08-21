import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class CustomContainer extends Component {
    render() {
        return (
            <Container className='h-auto my-5'>
                <Row className='h-100'>
                    <Col className="text-center m-auto pt-lg-5">
                        <h2 className='text-uppercase'>a destination</h2>
                        <p className='m-auto w-75 pb-lg-5'>Praesent commodo
                            cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                            lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis
                            ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur.
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CustomContainer;