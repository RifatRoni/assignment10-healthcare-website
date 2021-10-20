import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Doctor.css'

const Doctor = (props) => {
    const {doctorName, designation, image} = props.doctor;
    return (
        <div>
            <Col>
                <Card className="course-div">
                    <Card.Img variant="top" src={image} className="img-fluid doctor-image"/>
                    <Card.Body>
                    <Card.Title>{doctorName}</Card.Title>
                    <div className="course-duration-budget">
                    <Card.Text className="theme-color fw-bold">{designation}
                    </Card.Text>
                    </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Doctor;