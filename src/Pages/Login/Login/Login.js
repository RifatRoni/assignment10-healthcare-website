import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import loginImg from '../../../images/login/login.png';

const Login = () => {
    const {
        user,
        error,
        setError,
        setEmail,
        setPassword,
        signInWithGoogle,
        signInWithEmail_Password,
    } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/";

    // event handlers
    const handleSignIn = (provider) => {
        provider()
            .then((res) => {
                console.log(res.user);
                history.push(redirect_uri);
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            });
    };
    const handleStateChangeOnInput = (e, setState) => {
        setState(e.target.value);
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSignIn(signInWithEmail_Password);
    };

    useEffect(() => {
        user.accessToken && history.push(redirect_uri);
    }, [user, history, redirect_uri]);

   
    
    return (
        // <div className="mt-4">
        <div className="container">
            <Row className="pt-3">
                <Col md={12} lg={4} className="pb-3">
                   <div className="">
                   <img className="img-fluid" src={loginImg} alt="" />
                   </div>
                </Col>
                <Col md={12} lg={8} className="pb-3 mt-2">
                    <div className="border px-5 pb-4">
                    <h2 className="my-4">Please Login And Continue ...</h2>
                    <div className="text-danger" style={{ height: "50px" }}>
                        {error}
                    </div>
                        <form onSubmit={handleFormSubmit}>
                            <input  className="form-control" type="email" placeholder="Enter your email" onBlur={(e) => handleStateChangeOnInput(e, setEmail)} required aria-label="default input example"/>
                            <br />
                            <input  className="form-control" type="password" placeholder="Enter your password" onBlur={(e) => handleStateChangeOnInput(e, setPassword)} required aria-label="default input example"/>
                            <br />
                            <input className="btn theme-btn px-3 mb-2" type="submit" value="Login" />
                        </form>
                        <small>
                            New User? <Link to="/register">Register Now</Link>
                        </small>
                        <br />
                        <button onClick={() => handleSignIn(signInWithGoogle)} className="btn btn-danger mt-2"> <i class="fab fa-google"></i> Google Sign In</button>
                    </div>
                </Col>
            </Row>
        </div>









    /*     <div>
            <form onSubmit={handleFormSubmit}>
                <h1>Login Now</h1>
                <div className="text-danger" style={{ height: "50px" }}>
                    {error}
                </div>
                <input
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => handleStateChangeOnInput(e, setEmail)} required
                />
                <br />
                <input
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => handleStateChangeOnInput(e, setPassword)} required
                />
                <br />
                <input type="submit" value="Login" />
            </form>
            <br />
            <small>
                New User? <Link to="/register">Register Now</Link>
            </small>
            <div>
                <button onClick={() => handleSignIn(signInWithGoogle)}>
                    Google Sign In
                </button>
                <br />
            </div>
        </div>
 */




    );
};

export default Login;