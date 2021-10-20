import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res=>res.json())
            .then(data=>setDoctors(data))
    }, []);
    return (
        <div className="container mb-5">
            <h1 className="text-center py-5 theme-color">Our Doctors</h1>
            <Row xs={1} md={2} lg={4} className="g-4">
                {
                doctors.map(doctor => <Doctor key={doctor.key} doctor={doctor}></Doctor>)
                }             
            </Row>
        </div>
    );
};

export default Doctors;