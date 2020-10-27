import React, { Component } from 'react'
import { Container, Col, Row,Card, CardBody, CardImg, CardTitle} from 'shards-react';

class FeaturedGames extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Container className="p-3">
                 <center>
                 <h2>FEATURED<strong className="header-color"> &nbsp;GAMES</strong></h2>
                </center>
                <Row className="featured-games">
                <Col>
                <Card className="card-image">
                <CardImg top src="https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/soccer-poster-384x488.jpg" className="card-image" />
                    <CardBody>
                    <CardTitle>GLORIA SOCCER</CardTitle>
                    </CardBody>
                </Card>
                </Col>
                <Col>
                <Card className="card-image">
                <CardImg top src="https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/ew-cover-384x488.jpg" className="card-image" />
                    <CardBody>
                    <CardTitle>EGYPT AND WORLD</CardTitle>
                    </CardBody>
                </Card>
                </Col>
                <Col>
                <Card className="card-image">
                <CardImg top src="https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/cod-cover-384x488.jpg" className="card-image"/>
                    <CardBody>
                    <CardTitle>EARTH WARS</CardTitle>
                    </CardBody>
                </Card>
                </Col>
                <Col>
                <Card className="card-image">
                <CardImg top src="https://i.redd.it/hzm57ypdhbc51.jpg" className="card-image"/>
                    <CardBody>
                    <CardTitle>CALL OF DUTY: MODERN WELFARE</CardTitle>
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