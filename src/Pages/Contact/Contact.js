import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import contactImg from '../../images/contact/contact.png';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-div">
            <Container className="mt-4">
                <h1 className="text-center">Contact Us</h1>    
                <Row>
                    <Col sm={12} lg={6} xs={{ order: 'last' }} md={{ order: 'first' }} className="contact-info-div">
                        <Form className="w-75 mx-auto">
                            <FloatingLabel controlId="floatingTextarea" label="First Name" className="mb-3">
                                <Form.Control type="text" placeholder="Your Name" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                                   
                            <FloatingLabel controlId="floatingTextarea2" label="Write your message here . . .">
                                <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '150px' }}
                                />
                            </FloatingLabel>
                            <Button className="me-3 my-3 btn theme-btn">Send Message</Button>
                        </Form> 
                    </Col>
                    <Col sm={12} lg={6} xs={{ order: 'first' }} md={{ order: 'last' }}>
                        <img src={contactImg} className="img-fluid" alt="" />
                    </Col>
                </Row>
            </Container>
        
    </div>
    );
};

export default Contact;