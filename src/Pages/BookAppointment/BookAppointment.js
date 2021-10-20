import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import bookingImg from '../../images/booking/booking.png';
import './BookingAppointment.css';

const BookAppointment = () => {
    return (
        <div className="booking-service-div">
            <div className="container">   
                <div className="mb-5"> 
                <Container>    
                    <Row>
                        <Col sm={12} lg={6} xs={{ order: 'last' }} md={{ order: 'first' }} className="booking-info-div">
                            <div className="contact-info">
                                <h1>Book An Appointment</h1>
                                <h4>All High Class Services Available for You</h4>
                                <h4>By Providing valid information you can get a schedule</h4>
                            </div>
                        </Col>
                        <Col sm={12} lg={6} xs={{ order: 'first' }} md={{ order: 'last' }}>
                            <img src={bookingImg} className="img-fluid" alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>

           
            <div className="my-5"> 
                <Container>
                    <div className="bg-white py-5 border">
                    <h4 className="text-center py-3">Enter Valid Data And Book Now</h4>
                        <Form className="w-75 mx-auto">
                            <FloatingLabel controlId="floatingTextarea" label="First Name" className="mb-3">
                                <Form.Control type="text" placeholder="First Name" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingTextarea" label="Last Name" className="mb-3">
                                <Form.Control type="text" placeholder="Last Name" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingSelect" label="(Chose your service)" className="mb-3">
                            <Form.Select aria-label="Floating label select example">
                                <option>Select Your Service</option>
                                <option value="1">Lasik Treatment</option>
                                <option value="2">Uveitis Problem</option>
                                <option value="3">Cornea Treatement</option>
                                <option value="3">Glaucoma Recover</option>
                                <option value="3">Cataract Disfunction</option>
                                <option value="3">Dry Eye Solution</option>
                                <option value="3">Vitreo Retina infection</option>
                                <option value="3">Orbit and Oculoplasty</option>
                            </Form.Select>
                            </FloatingLabel>       
                            <FloatingLabel controlId="floatingTextarea2" label="Write your message here . . .">
                                <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                            <Button className="me-3 my-3 btn theme-btn">Confirm Booking</Button>
                        </Form> 
                    </div> 
                </Container>               
            </div>
            </div>
            
        </div>
    );
};

export default BookAppointment;