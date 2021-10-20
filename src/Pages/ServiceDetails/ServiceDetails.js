import React, { useEffect, useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState({})
    useEffect(() => {
        fetch('/serviceDetails.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data.services))
    }, []);
    useEffect(() => {
        const foundService = serviceDetails.find(services => services.serviceId === serviceId)
        setSingleService(foundService)
    }, [serviceDetails])
    return (
        <div>
            <Container>
                <Row className="pt-3">
                <Col md={12} lg={4} className="pb-3">
                   <img className="single-service-img"  src={singleService?.image} alt="" />
                </Col>
                <Col md={12} lg={8} className="mb-5 mt-3"  style={{backgroundColor:"#ffa50026"}}>
                    <div style={{paddingLeft:"20px", paddingRight:"20px"}}>
                        <h3 className="pt-4">Diseases Name: {singleService?.serviceName}</h3>
                        <hr />
                        <p>Available Doctor: {singleService?.doctorName}</p>
                        <p>Visit Fee: {singleService?.visitFee}</p>
                        <p>Description: {singleService?.serviceDescription}</p>
                        <Button variant="secondary" className="mb-5" size="sm">Book Appointment</Button>
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default ServiceDetails;