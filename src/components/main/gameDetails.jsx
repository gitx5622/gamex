import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, Button }  from 'shards-react';
import { AiFillTags, AiOutlineFieldTime, AiFillSetting, BiWorld, CgScreen, FaUsers } from "react-icons/all";
import Footer from "./footer";
import NavBar from './navbar';
import pg18 from '../../assets/18.jpg';

const GameDetails = ({params}) => {
  const gameID = params.match.id
  console.log(gameID);
    return ( 
        <div>
            <NavBar/>
            <Container>
            <Row className="game-details">
                <Col sm={8} xs={12}>
                    <Card>
                        <CardImg src="https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/nfs-3-970x570.jpg" height="400px"/>
                    </Card>
                    <Card className="game-details">
                        <CardBody>
                            <h3>ABOUT GAME</h3>
                        <p>Purus non enim praesent elementum facilisis. Neque vitae tempus quam
                             pellentesque. Facilisis mauris sit amet massa vitae tortor condimentum
                              lacinia. Rhoncus dolor purus non enim praesent elementum facilisis 
                              leo. Quisque non tellus orci ac auctor augue mauris. Lobortis mattis
                             aliquam faucibus purus. Cras pulvinar mattis nunc sed blandit libero 
                             volutpat. Amet porttitor eget dolor morbi non arcu risus. Proin 
                             sagittis nisl rhoncus mattis rhoncus urna neque viverra. Molestie at 
                             elementum eu facilisis sed. In aliquam sem fringilla ut morbi. Ut 
                             placerat orci nulla pellentesque dignissim enim sit amet venenatis. 
                             Lacus sed turpis tincidunt id aliquet risus feugiat in diam sit.
                            <br/><br/>
                            Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Nec tincidunt 
                            praesent semper feugiat nibh sed pulvinar. Ornare aenean euismod elementum nisi quis eleifend 
                            quam adipiscing vitae. At imperdiet dui accumsan sit amet nulla facilisi. Morbi tincidunt ornare 
                            massa eget egestas purus viverra. Commodo viverra maecenas accumsan lacus vel. In fermentum posuere
                            urna nec tincidunt. Malesuada fames ac turpis egestas sed tempus urna. Lorem sed risus ultricies
                            tristique nulla aliquet enim tortor. Ultricies lacus sed turpis tincidunt id. Purus ut faucibus
                            pulvinar elementum integer enim neque volutpat ac. Non pulvinar neque laoreet suspendisse. 
                            Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis malesuada.
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
                        <li>GENRE : RacingSports</li>
                        <li>RELEASE DATE: August 15, 2017</li>
                        <li>DEVELOPER: GamevisionXtra Soft</li>
                        <li>PUBLISHER: EnvatoGloria Games</li>
                        <li>PLATFORMS: Steam Uplay</li>
                        <li>MODES: Co-opMulti Player</li>
                        </ul>
                        <h5>RECOMMENDED</h5>
                        <ul className="game-side-list">
                        <li>GENRE : RacingSports</li>
                        <li>RELEASE DATE: August 15, 2017</li>
                        <li>DEVELOPER: GamevisionXtra Soft</li>
                        <li>PUBLISHER: EnvatoGloria Games</li>
                        <li>PLATFORMS: Steam Uplay</li>
                        <li>MODES: Co-opMulti Player</li>
                        </ul>
                        <h5>ADDITIONAL NOTES:</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Phasellus condimentum pretium commodo. In hac habitasse
                            platea dictumst. Donec ut nibh in metus accumsan tristique
                            et non velit. Lorem ipsum dolor sit.
                        </p>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={4} xs={12}>
                    <Card className="card1">
                    <CardBody>
                    <h5>GAME DETAILS</h5>
                    <ul className="game-side-list">
                        <li><AiFillTags size={20} color="#7EDFEC"/> GENRE : Racing Sports</li>
                        <li><AiOutlineFieldTime size={20} color="#7EDFEC"/> RELEASE DATE: August 15, 2017</li>
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
                    <CardImg />
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
                </Col>
            </Row>
            </Container>
            <Footer/>
        </div>
        );

}
 
export default GameDetails;