import React from 'react';
import desktop from "../../assets/desktop.png";
import { Row, Col, Card, CardBody, CardTitle, CardImg} from "shards-react";

const Games = ({games}) => {
    return ( 
        <div>
            <Row className="game-filter">
            {games.map(game => { return (
                <Col key={game.id} sm="12" md="4" lg="3">
                    <Card className="card-image">
                    <CardImg top src={game.image_url} className="card-image"/>
                        <CardBody>
                        <CardTitle>{game.title}</CardTitle>
                        {game.genres.map(genre => <Col sm="12"><img src={desktop} alt="" width="20px" height="20px"/> {genre.name}</Col>)}
                        </CardBody>
                    </Card>
                    <br/>
                </Col>
            )})}
            </Row>
        </div>
     );
}
 
export default Games;