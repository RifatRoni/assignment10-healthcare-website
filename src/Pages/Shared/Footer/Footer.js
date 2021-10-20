import React from 'react';
import { Col, Row } from 'react-bootstrap';
import logo from '../../../images/logo/eye-white-logo.png';

import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <Row className="pt-3">
                        <Col md={12} lg={4} className="pb-3">
                            <img
                            alt=""
                            src={logo}
                            width="50"
                            height="35"
                            className="d-inline-block align-top me-3 mt-1 img-fluid"
                            />
                            <span className="footer-brand-name-span"><h4>Unique Eye Hospital</h4></span>
                            <br />
                            
                            <p className="pt-3"> We Believe In Service
                            We are always active to provide out service. There is equal value for all classes of people.</p>
                            <p> We Proud to Serve the whole country</p>

                        </Col>
                        <Col lg={2} className="pb-3">
                            <h4>Quick Links</h4>        
                            <p>Home</p>
                            <p>About</p>
                            <p>Service</p>
                            <p>Contact</p>

                        </Col>
                        <Col lg={3} className="pb-3">
                            <h4>Opening Hours</h4>
                            <p>Doctors Available</p>
                            <p>Sunday to Thursday</p>
                            <p>Time: 09:00 AM to 4:00PM</p>
                            <p>(24/7 Active For Emergency Patients) </p>

                        </Col>
                        <Col lg={3} className="pb-3">
                            <h4>Contact Us</h4>
                            <p><span><i className="fas fa-phone-alt"></i> Contact: 01946872823</span></p>
                            <p><span> <i className="fas fa-envelope"></i> Email: eyecare@gmail.com</span></p>
                            <p>
                                <span> <i className="fas fa-map-marker-alt"></i>  Plot-2, Road-1, Block-A, Mirpur-11, Dhaka-1216</span>
                            </p>
                        </Col>
                    </Row>
                </div>
                
                <hr />
                <p  className="text-center pt-3"> &copy; 2021 All right reserved | Unique Eye Care</p>
            </div>
        </div>
    );
};

export default Footer;