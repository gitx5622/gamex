import React from 'react';
import { Container, Col, Row } from 'shards-react';
import newreleased from "../../assets/fifa.jpg";
import newlyreleased from "../../assets/slider2.jpg";


const Released = () => {
    return ( 
        <div>
            <img src={newreleased} alt="new-released" className="new-released"/>
            <Container className="newly-released">
                <Row>
                    <Col><h1>FIFA 22 UPCOMING</h1>
                        <p>The 2022 FIFA World Cup is scheduled to be the 22nd edition 
                            of the FIFA World Cup, the quadrennial international men's 
                            association football championship contested by the national
                            teams of the member associations of FIFA
                        </p>
                    </Col>
                    <Col><img src={newlyreleased} alt="newly-released"/> </Col>
                </Row>
            </Container>
        </div>
     );
}
 
export default Released;