import React, { Component } from 'react'
import { Container, Col, Row,Card, CardBody} from 'shards-react';

class FeaturedGames extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Container className="p-3">
                 <center>
                 <h2>Featured Games</h2>
                </center>
                <Row className="featured-games">
                <Col>
                <Card>
                    <CardBody>
                        Nunc quis nisl ac justo elementum sagittis in quis justo.
                    </CardBody>
                </Card>
                </Col>
                <Col>
                <Card>
                    <CardBody>
                        Nunc quis nisl ac justo elementum sagittis in quis justo.
                    </CardBody>
                </Card>
                </Col>
                <Col> <Card>
                    <CardBody>
                        Nunc quis nisl ac justo elementum sagittis in quis justo.
                    </CardBody>
                </Card>
                </Col>
                </Row>
            </Container>

            </div>
         );
    }
}
 
export default FeaturedGames;