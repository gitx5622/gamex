import React, {Component} from 'react';
import {Container, Row, Col,Card, CardBody, Button,CardImg, CardTitle} from 'shards-react';
import axios from 'axios';
import API_ROUTE from '../../utils/constants';

class GameFilter extends Component { 
     state = {
        genres:[],
        games:[],
        gameGenres:[],
     }

    async componentDidMount() {
        const {data:genreData} = await axios.get(`${API_ROUTE}/genres`);
        this.setState({
            genres: genreData
        })
    }

      render(){
          const { genres, gameGenres} = this.state;
        return ( 
            <Container className="p-3">
                 <center>
                 <Button className="m-2" outline squared theme="info">
                 <a href onClick={() => axios.get(`${API_ROUTE}/games?genre_id=0`).then(res => {this.setState({gameGenres: res.data.games})})}>ALL GAMES</a>
                </Button>
                {genres.map(genre => {return (
                    <Button key={genre.id} className="m-2" outline squared theme="info">
                    <a href onClick={() => axios.get(`${API_ROUTE}/games?genre_id=${genre.id}`).then(res => {this.setState({gameGenres: res.data.games})})}>{genre.name}</a>
                    </Button>
                )}
                )}
                </center>
                <Row className="game-filter">
                {gameGenres.map(game => { return (
                    <Col key={game.id} sm="12" md="4" lg="3">
                        <Card className="card-image">
                        <CardImg top src={game.image_url} className="card-image"/>
                            <CardBody>
                            <CardTitle>{game.title}</CardTitle>
                            {game.genres.map(genre => <li>{genre.name}</li>)}
                            </CardBody>
                        </Card>
                    </Col>
                )})}
                </Row>
            </Container>
         );
    }  
}
    
 
export default GameFilter;