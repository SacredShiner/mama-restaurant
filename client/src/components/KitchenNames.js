import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class KitchenNames extends Component {
    render() {
        return (
            <Container className='text-left text-dark text-uppercase h-100'>
                <Row className='pt-5' style={{height: 420, maxWidth: 2000, fontSize: 18}}>
                    <Col className='mb-auto'>
                        <h2>LIZ GRISAITIS</h2>
                        <h5 className='text-secondary'>EXECUTIVE CHEF</h5>
                        <p className='text-lowercase'>Nullam quis risus eget urna mollis ornare vel eu leo.
                            Curabitur blandit tempus porttitor.
                            Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor
                            mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor
                            sit
                            amet, consectetur adipiscing elit.
                        </p>
                    </Col>

                    <Col className='mb-auto'>
                        <h2 >MATTEO CAPON
                        </h2>
                        <h5 className='text-secondary'>CHEF DE CUISINE </h5>
                        <p className='text-lowercase'>Duis mollis, est non commodo luctus, nisi erat porttitor
                            ligula, eget lacinia odio sem
                            nec elit. Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus
                            varius
                            blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur. Praesent
                            commodo cursus magna, vel scelerisque.
                        </p>
                    </Col>

                    <Col className='mb-auto'>
                        <h2 >ANGIE WALSH </h2>
                        <h5 className='text-secondary'>PASTRY CHEF </h5>
                        <p className='text-lowercase'>Cras justo odio, dapibus ac facilisis in, egestas eget
                            quam.
                            Maecenas faucibus mollis
                            interdum. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio,
                            dapibus
                            ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor. Cum sociis natoque penatibus et magnis.</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default KitchenNames;