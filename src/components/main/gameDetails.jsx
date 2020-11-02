import React, { useEffect} from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, Button, Progress }  from 'shards-react';
import { AiFillTags, AiOutlineFieldTime, AiFillSetting, BiWorld, CgScreen, FaUsers } from "react-icons/all";
import { useSelector, useDispatch } from "react-redux";
import {SignOut} from "../../store/auth/actions/authActions";
import { getGame } from "../../store/games/actions/gameAction";
import Carousel from 'react-bootstrap/Carousel';
import Footer from "./footer";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import pg18 from '../../assets/18.jpg';
import { NavLink } from 'react-router-dom';


const GameDetails = (props) => {
    const productID = props.match.params.id;
    const currentState = useSelector((state) => state);

    const { isAuthenticated } = currentState.Auth;
    const game = currentState.Game.game;

    console.log( game);

    const dispatch = useDispatch();

    const getSingleGame = (id) => dispatch(getGame(id));
    const logoutUser  = () => dispatch(SignOut());

    useEffect(() => {
        getSingleGame(productID);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const logout = (e) => {
        e.preventDefault();
        logoutUser()
    };

    
    const SignedInLinks = (
        <React.Fragment>
        <li><Link className="auth-link" to="/login"><Button size="sm" squared theme="info">Login</Button></Link></li>
        <li><Link className="auth-link" to="/register"><Button size="sm" squared theme="info">Signup</Button></Link></li>
        </React.Fragment>
    );
    const SignedOutLinks = (
        <li><Link onClick={logout} to="/logout"><Button size="sm" squared theme="info">LOGOUT</Button></Link></li>
    );
    return ( 
        <div>
             <Carousel interval={2000} fade={true}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={game.imageurl2}
                style={{minHeight:"320px"}}
                alt="Third slide"
                />
                <Carousel.Caption>
                <Row className="image-content">
                    <Col sm={1}><img src={logo} alt="logo" width="80px" height="50px"/></Col>
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
                     <Col sm={12}><h1>{game.title}</h1></Col>
                </Row>
                <h1 className="gameplay">GAMEPLAY</h1>
                <p>{game.title} {game.description}
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
            <Container>
            <Row className="game-details">
                <Col sm={8} xs={12}>
                    <Card>
                        <Carousel>
                            <Carousel.Item>
                            <CardImg src={game.imageurl3} height="400px" width="730px"/>
                            <Carousel.Caption/>
                            </Carousel.Item>
                            <Carousel.Item>
                            <CardImg src={game.imageurl4} height="400px" width="730px"/>
                            <Carousel.Caption/>
                            </Carousel.Item>
                            <Carousel.Item>
                            <CardImg src={game.imageurl5} height="400px" width="730px"/>
                            <Carousel.Caption/>
                            </Carousel.Item>
                            <Carousel.Item>
                            <CardImg src={game.imageurl6} height="400px" width="730px"/>
                            <Carousel.Caption/>
                            </Carousel.Item>
                        </Carousel>
                    </Card>
                    <Card className="game-details">
                        <CardBody>
                            <h3>ABOUT {game.title}</h3>
                        <p>
                            {game.about}
                        </p>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                        <h3>SYSTEM REQUIREMENTS</h3>
                        <Button 
                        className="m-2"
                        outline squared theme="info">
                            WINDOWS
                        </Button>
                        <Button
                        className="m-2"
                        outline squared theme="info">
                            MAC OS X
                        </Button>
                        <h5>MINIMUM</h5>
                        <ul className="game-side-list">
                        <li>GENRE : {game.category}</li>
                        <li>RELEASE DATE: {game.release_date}</li>
                        <li>DEVELOPER: GamevisionXtra Soft</li>
                        <li>PUBLISHER: EnvatoGloria Games</li>
                        <li>PLATFORMS: Steam Uplay</li>
                        <li>MODES: Co-opMulti Player</li>
                        </ul>
                        <h5>RECOMMENDED</h5>
                        <ul className="game-side-list">
                        <li>GENRE : {game.category}</li>
                        <li>RELEASE DATE: {game.release_date}</li>
                        <li>DEVELOPER: GamevisionXtra Soft</li>
                        <li>PUBLISHER: EnvatoGloria Games</li>
                        <li>PLATFORMS: Steam Uplay</li>
                        <li>MODES: Co-opMulti Player</li>
                        </ul>
                        <h5>AVERAGE RATINGS:</h5>
                        <Row>
                        <Col sm={8}>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                         aliqua. Nisl nisi scelerisque eu ultrices vitae. Eu lobortis 
                         elementum nibh tellus molestie. Tellus orci ac auctor augue
                          mauris augue neque. Sem fringilla ut morbi tincidunt augue
                           interdum. Sed risus ultricies tristique nulla aliquet enim. 
                           Dui nunc mattis enim ut. Aliquet bibendum enim facilisis 
                           gravida neque convallis a. In vitae turpis massa sed elementum 
                           tempus egestas sed.
                        </p>
                        </Col>
                        <Col sm={4}>
                        <h1>9.5</h1>
                        </Col>
                        </Row>
                        <h6>Graphics</h6>
                        <Progress value="95">95</Progress>
                        <h6>Sound</h6>
                        <Progress value="80">80</Progress>
                        <h6>Gameplay</h6>
                        <Progress value="98">98</Progress>
                        <h6>Screenplay</h6>
                        <Progress value="68">68</Progress>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={4} xs={12}>
                    <Card className="card1">
                    <CardBody>
                    <h5>GAME DETAILS</h5>
                    <ul className="game-side-list">
                        <li><AiFillTags size={20} color="#7EDFEC"/> GENRE : {game.category}</li>
                        <li><AiOutlineFieldTime size={20} color="#7EDFEC"/> RELEASE DATE: {game.release_date}</li>
                        <li><AiFillSetting size={20} color="#7EDFEC"/> DEVELOPER: GamevisionXtra Soft</li>
                        <li><BiWorld size={20} color="#7EDFEC"/> PUBLISHER: EnvatoGloria Games</li>
                        <li><CgScreen size={20} color="#7EDFEC"/> PLATFORMS: Steam Uplay</li>
                        <li><FaUsers size={20} color="#7EDFEC"/> MODES: Co-opMulti Player</li>
                    </ul>
                    </CardBody>
                    </Card>
                    <Card className="card2">
                    <CardBody>
                    <h5>GAME POSTER</h5>
                    <CardImg src={game.image_url} height="350px" width="300px"/>
                    </CardBody>
                    </Card>
                    <Card className="card3">
                    <Row>
                    <Col sm={4}><CardImg src={pg18}/></Col>
                    <Col sm={8}>
                    <p>Violence, online play and strong language</p>
                    </Col>
                    </Row>
                    </Card>
                    <Card className="card4">
                    <CardBody>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit phasellus condimentum.</p>
                    <Row>
                    <Button 
                        className="m-2"
                        outline squared theme="info">
                            REPORT
                        </Button>
                    <Button 
                        className="m-2"
                        outline squared theme="info">
                            CONTACT
                        </Button>
                    </Row>
                    </CardBody>
                    </Card>
                </Col>
            </Row>
            </Container>
            <Footer/>
        </div>
        );

}
 
export default GameDetails;