import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import aboutImg from '../../../images/about-us/about-us.jpg';


const About = () => {
    const history = useHistory();
    const handleViewMoreService = () => {
        history.push('/services');
    }
    return (
        <div className="container mb-5">
           <h1 className="text-center theme-color my-5">About Us</h1>
           <Row className="pt-3">
                <Col md={12} lg={6} className="pb-3">
                   <img className="img-fluid" src={aboutImg} alt="" />
                </Col>
                <Col md={12} lg={6} className="pb-3">
                   <h3>Our Journey</h3>
                   <p>Unique Eye Hospital has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality. The hospital is a showcase of synergy of medical technology and advances in ICT Division through paperless medical records. The skilled nurses, technologists and administrators of Specialized Hospital, aided by state-of-the-art equipments, provide a congenial infrastructure for the medical professionals in providing healthcare of international standards.</p>
                   <h3>Our Mission</h3>
                   <p>We focused our health interventions particularly on the provision of hospital-based clinical care due to the fact that a vast majority of people in Bangladesh face barriers to accessing quality hospital-based care.</p>
                   <h3>Our Vision</h3>
                   <p>To be a renowned organization at the leading edge of medicine, providing quality services.</p>
                   <Button onClick={handleViewMoreService} className="theme-btn border-0">Visit Our Services</Button>
                </Col>
            </Row>
        </div>
    );
};

export default About;