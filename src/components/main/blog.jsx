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
                <Col>
                <Card>
                <CardImg top src="https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/video-post-560x370.jpg" />
                    <CardBody>
                    <CardTitle>NEW TRAILER IS RELEASED!</CardTitle>
                    </CardBody>
                </Card>
                </Col>
                <Col>
                <Card>
                <CardImg top src="https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/post-1-560x370.jpg" />
                    <CardBody>
                    <CardTitle>PRICE LIST OF THE GAMES</CardTitle>
                    </CardBody>
                </Card>
                </Col>
                <Col> 
                <Card>
                <CardImg top src="https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/gallery-3-560x370.jpg" />
                    <CardBody>
                    <CardTitle>ABOUT SPACE AND WORLD</CardTitle>

                    </CardBody>
                </Card>
                </Col>
                </Row>
            </Container>
        </div>
     );
}
 
export default Blog;