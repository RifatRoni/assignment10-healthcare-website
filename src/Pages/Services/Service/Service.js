import React from 'react';
import {Col, Row, Button} from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css'

const Service = (props) => {
    const {serviceId, serviceName, serviceDescription, image} = props.service;
    const history = useHistory();
    const handleServiceDetails= () => {
        history.push(`/service/${serviceId}`);
    }
    const bookAppointment= () => {
        history.push('/book-appointment');
    }
    return (
        <div>
            <Col className="bg-light p-4 border service-card">
                <div>
                    <Row>
                        <Col lg={4}>
                            <img className="serviceImage" src={image} alt="" />
                        </Col>
                        <Col lg={8}>
                        <h4>{serviceName}</h4>
                        <p>{serviceDescription.slice(0,180)}</p>
                        <Button onClick={handleServiceDetails} variant="secondary" size="sm">Read More</Button>
                        <Button onClick={bookAppointment} variant="secondary" size="sm" className="ms-3">Book Appointment</Button>
                        </Col>
                    </Row>
                </div>
            </Col>
        </div>
    );
};

export default Service;