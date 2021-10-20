import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import './WhyChooseUs.css';
import whyChooseImg from '../../../images/why-choose-us/why-choose-us.png';
import { useHistory } from 'react-router';

const WhyChooseUs = () => {
    const history = useHistory();
    const bookAppointment= () => {
        history.push('/book-appointment');
    }
    return (
        <div className="container">
            <h1 className="text-center theme-color my-5">Why You Should Choice Us</h1>
            <Row>
                <Col lg={8}>
                <p>Over the course of a decade, our hospitals have emerged as an innovative model of sustainable health service delivery for low-middle-income groups, delivering a full spectrum of in-patient, out-patient, emergency, surgical, diagnostic, lab and pathology and other specialist care under one roof and through expert medical professionals, skilled nurses/paramedics and technologists.</p>
            <ul className="mb-5">
                <li>
                    <p><span className="fw-bold">Latest Technology: </span> We use latest technology based treatment machines. this is good for all.</p>
                </li>
                <li>
                    <p><span className="fw-bold">24/7 Service: </span>We are proving 24/7 hours services sothat we can provide maximum services.</p>
                </li>
                <li>
                    <p><span className="fw-bold">Standard Service Charge: </span>We don't take over charge from our patients and we like to provide all classes of people.</p>
                </li>
                <li>
                    <p> <span className="fw-bold">Experienced Doctor: </span>We have bring all experienced doctor. so we are available to provide the high class services.</p>
                </li>
                <li>
                    <p> <span className="fw-bold">Best Online Doctor Support: </span>Our doctors are so much friendly and always try to provide you throng online.</p>
                </li>
            </ul>
                </Col>
                <Col lg={4}>
                    <img className="w-75 float-right choose-us-img" src={whyChooseImg} alt="" />
                </Col>
            </Row>
            <div className="mb-5 d-flex justify-content-center">
                <Button onClick={bookAppointment} className="theme-btn border-0">Book Appointment</Button>
            </div> 
        </div>
    );
};

export default WhyChooseUs;