import React from 'react';
import { Container, Col, Row} from 'shards-react';

const Footer = () => {
    return ( 
        <div className="footer">
              <Container className="p-3">
                <Row>
                <Col sm={3} xs={12}>
                <ul>
                    <h3>Company</h3>
                    <li>About</li>
                    <li>Privacy Policy</li>
                    <li></li>
                </ul>
                </Col>
                <Col sm={3} xs={12}>
                <ul>
                    <h3>Contact Us</h3>
                    <li>Penthouse Floor, Almont Park <br/>Church Road, Off Waiyaki Way​</li>
                    <li> PO Box 38532 - 00623</li>
                    <li></li>
                </ul>
                </Col>
                <Col sm={3} xs={12}> 
                <ul>
                    <h3>Follow Us</h3>
                    <li>Youtube</li>
                    <li>Facebook</li>
                    <li>Whatsapp</li>
                </ul>
                </Col>
                <Col sm={3} xs={12}> 
                <ul>
                    <h3>Career</h3>
                    <li>Join Us</li>
                    <li>esport</li>
                    <li>Gamex Careers</li>
                </ul>
                </Col>
                </Row>
            </Container>
            <div  className="bottom-footer p-3">
                <Container>
                <Row>
                    <Col sm={6} xs={12}>
                    <ul>
                    <li>Gamex</li>
                    <li>Copyright © 2020 Gamex - All rights reserved.</li>
                    </ul>
                    </Col>
                    <Col sm={6} xs={12}>
                    <ul>
                        <li>Home</li>
                        <li>Help Center</li>
                        <li>Contact</li>
                        <li>Advertise</li>
                        <li>Terms and Conditions</li>
                    </ul>
                    </Col>
                </Row>
                </Container>
            </div>
        </div>
     );
}
 
export default Footer;
