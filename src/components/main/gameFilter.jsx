import React, {useEffect} from 'react';
import { Container, Col, Row,Card, CardBody, Button,CardImg, CardTitle} from 'shards-react';
import { useSelector, useDispatch } from "react-redux";
import { fetchGenres } from "../../store/genres/actions/genreAction";

const GameFilter = () => { 
    const genresSelector = useSelector((state) => state.Genre);
    const dispatch = useDispatch();
    const getGenres = () => dispatch(fetchGenres());

    useEffect(() => {
        getGenres();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let genres = genresSelector.genres.map(genre => {
        return (
            <Button className="m-2" outline squared theme="info">
                {genre.name}
            </Button>
        )
    })
        return ( 
            <Container className="p-3">
                 <center>
                    {genres} 
                </center>
                <Row className="game-filter">
                <Col>
                <Card>
                <CardImg top src="https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/me-cover-384x488.jpg" />
                    <CardBody>
                    <CardTitle>SPACE WARS</CardTitle>
                    </CardBody>
                </Card>
                </Col>
                <Col>
                <Card>
                <CardImg top src="https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/nfs-cover-384x488.jpg" />
                    <CardBody>
                    <CardTitle>RETURN OF CARS</CardTitle>
                    </CardBody>
                </Card>
                </Col>
                <Col> 
                <Card>
                <CardImg top src="https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/the-witcher-1-384x488.jpg" />
                    <CardBody>
                    <CardTitle>THE WARRIOR 3</CardTitle>
                    </CardBody>
                </Card>
                </Col>
                <Col> 
                <Card>
                <CardImg top src="https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/Planes-of-Gloria-384x488.jpg" />
                    <CardBody>
                    <CardTitle>PLANES OF GLORIA</CardTitle>
                    </CardBody>
                </Card>
                </Col>
                </Row>
                <center><Button className="m-2" outline squared theme="info">
                ALL GAMES
                </Button>
                </center>
            </Container>
         );
}
 
export default GameFilter;