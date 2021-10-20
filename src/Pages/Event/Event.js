import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import eventImg1 from '../../images/event/health1.jpg';
import eventImg2 from '../../images/event/health2.jpg';
import eventImg3 from '../../images/event/health3.jpg';

const Event = () => {
    return (
        <Container> 
            <h1 className="text-center my-5">Our Upcoming Events</h1>  
            <hr /> 
            <Row className="my-5">
                <Col sm={12} lg={6} xs={{ order: 'last' }} md={{ order: 'first' }} className="booking-info-div">
                    <div className="contact-info">
                        <h1>National Health Concern Event</h1>
                        <p> Each month we feature select National Health Observances (NHOs) that align with our mission to improve health across the Bangladesh. In October we’re raising awareness about health literacy, breast cancer, and health care quality.</p>
                        <span className="fw-bold"><h4>Date: 11 November 2021</h4></span>
                    </div>
                </Col>
                <Col sm={12} lg={6} xs={{ order: 'first' }} md={{ order: 'last' }}>
                    <img src={eventImg1} className="img-fluid" alt="" />
                </Col>
            </Row>
            <hr />
            <Row className="my-5">
            <Col sm={12} lg={6} xs={{ order: 'first' }} md={{ order: 'first' }}>
                    <img src={eventImg2} className="img-fluid" alt="" />
                </Col>
                <Col sm={12} lg={6} xs={{ order: 'last' }} md={{ order: 'last' }} className="booking-info-div">
                    <div className="contact-info">
                        <h1>Covid-19 vaccination Campaign Event</h1>
                        <p> We set event for the COVID-19 pandemic because it has led to a dramatic loss of human life worldwide and presents an unprecedented challenge to public health, food systems and the world of work. The economic and social disruption caused by the pandemic is devastating: tens of millions of people are at risk of falling into extreme poverty </p>
                        <span className="fw-bold"><h4>Date: 15 November 2021</h4></span>
                    </div>
                </Col>
                
            </Row>
            <hr />
            <Row className="my-5">
                <Col sm={12} lg={6} xs={{ order: 'last' }} md={{ order: 'first' }} className="booking-info-div">
                    <div className="contact-info">
                        <h1>Blood Donation Campaign Event</h1>
                        <p>We need lifesavers like you. Why not come along to a blood donor registration event near you and find out how easy it is to register and give blood – it only takes 5 minutes. Find an event near you. Our team will answer any questions you have and they will register your details and book your first appointment.</p>
                        <span className="fw-bold"><h4>Date: 5 December 2021</h4></span>
                    </div>
                </Col>
                <Col sm={12} lg={6} xs={{ order: 'first' }} md={{ order: 'last' }}>
                    <img src={eventImg3} className="img-fluid" alt="" />
                </Col>
            </Row>
        </Container>
        
    );
};

export default Event;