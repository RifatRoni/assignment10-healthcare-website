import React, { useEffect, useState } from 'react';
import './SpecialService.css';
import { Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Service from '../../Services/Service/Service';

const SpecialService = () => {
    const [services, setSpecialServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res=>res.json())
            .then(data=>setSpecialServices(data.slice(0,6)))
    }, []);
    const history = useHistory();
    const handleViewMoreService = () => {
        history.push('/services');
    }
    return (
        <div className="special-service-div pb-5">
            <div className="container">
                <h1 className="text-center py-5">Our Special Service</h1>
                <Row xs={1} md={2} lg={2} className="g-4">
                    {
                    services.map(service => <Service key={service.key} service={service}></Service>)
                    }             
                </Row>
                <div className="mt-5 d-flex justify-content-center">
                    <Button onClick={handleViewMoreService}  variant="secondary">More Services</Button>
                </div>
            </div>
        </div>
    );
};

export default SpecialService;