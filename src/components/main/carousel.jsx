import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import {SignOut} from "../../store/auth/actions/authActions";
import { Button } from "shards-react";
import Carousel from 'react-bootstrap/Carousel';
import slider2 from '../../assets/slider2.jpg';
import slider3 from '../../assets/slider3.jpg';
import logo from '../../assets/logo.png';

const HomeCarousel = () => {
    const currentState = useSelector((state) => state);
    
    const { isAuthenticated } = currentState.Auth;

    const dispatch = useDispatch();

    const logoutUser  = () => dispatch(SignOut());

    const logout = (e) => {
        e.preventDefault();
        logoutUser()
    };
    
    const SignedInLinks = (
        <React.Fragment>
        <li><Button size="sm" squared theme="info"><Link className="auth-link" to="/login">Login</Link></Button></li>
        <li><Button size="sm" squared theme="info"><Link className="auth-link" to="/register">Signup</Link></Button></li>
        </React.Fragment>
    );
    const SignedOutLinks = (
        <li><Button size="sm" squared theme="info"><Link onClick={logout} to="/logout">LOGOUT</Link></Button></li>
    );
    return ( 
        <Carousel interval={2000} fade={true}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slider2}
                alt="Third slide"
                />
                <Carousel.Caption style={{marginBottom:"100px"}}>
                <Row className="image-content">
                    <Col sm={1}><img src={logo} alt="logo" width="80px"/></Col>
                    <Col sm={5}></Col>
                    <Col sm={6}>
                        <ul className="navbar">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/blog">Blog</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            { isAuthenticated ? SignedOutLinks: SignedInLinks }
                          </ul>
                    </Col>
                    <Col sm={12}><h1>FIFA 21</h1></Col>
                </Row>
                <h1 className="gameplay">GAMEPLAY</h1>
                <p>FIFA 21 rewards you for your creativity and control all over the pitch
                Create more scoring opportunities with all-new dynamic attacking systems 
                in the most intelligent FIFA gameplay to date.
                </p><br/><br/>
                <Button outline theme="info" href="/game/2">Game Details</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button outline theme="info" href="/game/2">Game Details</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slider3}
                alt="Third slide"
                />

                <Carousel.Caption style={{marginBottom:"100px"}}>
                <Row className="image-content">
                    <Col sm={1}><img src={logo} alt="logo" width="80px"/></Col>
                    <Col sm={5}></Col>
                    <Col sm={6}>
                        <ul className="navbar">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/blog">Blog</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            { isAuthenticated ? SignedOutLinks: SignedInLinks }
                            </ul>
                    </Col>
                    <Col sm={12}><h1>NEED FOR SPEED</h1></Col>
                </Row>
                <h1 className="gameplay">GAMEPLAY</h1>
                <p>Need for Speed Payback is a racing video game developed by 
                    Ghost Games and published by Electronic Arts for Microsoft 
                    Windows, PlayStation 4 and Xbox One.
                </p><br/><br/>
                <Button outline theme="info" href="/game/1">Game Details</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button outline theme="info" href="/game/1">Game Details</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
     );
}
 
export default HomeCarousel;