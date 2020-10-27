import React from 'react';
import { Container, Col, Row,Card, CardBody, CardTitle, CardImg} from 'shards-react';

const Blog = () => {
    return ( 
        <div className="blog">
             <Container className="p-3">
                 <center>
                 <h2>BLOG AND<strong className="header-color"> &nbsp;NEWS</strong></h2>
                </center>
                <Row className="featured-games">
                <Col sm="4" xs="12">
                <Card className="card-image">
                <CardImg top src="https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/video-post-560x370.jpg" className="card-image" />
                    <CardBody>
                    <CardTitle>NEW TRAILER IS RELEASED!</CardTitle>
                    Game Trailers and Clips. ... Red Dead Online - Official Halloween Pass Event 
                        Trailer ... Guilty Gear Strive - Official Release Date Announcement Trailer.
                       
                    </CardBody>
                </Card>
                <br/>
                </Col>
                <Col sm="4" xs="12">
                <Card className="card-image">
                <CardImg top src="https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/post-1-560x370.jpg" className="card-image" />
                    <CardBody>
                    <CardTitle>PRICE LIST OF THE GAMES</CardTitle>
                    Find here the list of Games price from different Publisher like Electronic Arts,
                         Square Enix, Nintendo and other top Games
                         
                    </CardBody>
                </Card>
                <br/>
                </Col>
                <Col sm="4" xs="12"> 
                <Card className="card-image">
                <CardImg top src="https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/gallery-3-560x370.jpg" className="card-image" />
                    <CardBody>
                    <CardTitle>ABOUT SPACE AND WORLD</CardTitle>
                    Did you know Saturn's moon Iapetus is two different colors? Take a look at 12
                         mind blowing facts about space that will change your world.
                         
                    </CardBody>
                </Card>
                </Col>
                </Row>
            </Container>
        </div>
     );
}
 
export default Blog;