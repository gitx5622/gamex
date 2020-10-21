import React, { Component } from 'react';
import { Container, Col, Row,Card, CardBody, Button} from 'shards-react';

class GameFilter extends Component {
    state = {  }
    render() { 
        return ( 
            <Container className="p-3">
                 <center>
                     <Button className="m-2" outline squared theme="info">
                        Info
                    </Button>
                </center>
                <Row className="game-filter">
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
                <Col> <Card>
                    <CardBody>
                        Nunc quis nisl ac justo elementum sagittis in quis justo.
                    </CardBody>
                </Card>
                </Col>
                </Row>
            </Container>
         );
    }
}
 
export default GameFilter;