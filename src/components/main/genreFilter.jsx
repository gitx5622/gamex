import React, {Component} from 'react';
import {Container, Row, Col,Card, CardBody, Button,CardImg, CardTitle} from 'shards-react';
import { Link } from "react-router-dom";
import axios from 'axios';
import API_ROUTE from '../../utils/constants';
import desktop from "../../assets/desktop.png";
import {history} from "../../utils/history";

class GameFilter extends Component { 
     state = {
        genres:[],
        gameGenres:[],
        readMore: false
     }

    async componentDidMount() {
        const {data:genreData} = await axios.get(`${API_ROUTE}/genres`);
        this.setState({
            genres: genreData
        })
        const {data:gameData} = await axios.get(`${API_ROUTE}/games`);
        this.setState({
            gameGenres: gameData.games
        })
        }
      render(){
          const { genres, gameGenres, readMore} = this.state;
        return ( 
            <Container className="p-3">
                 <center>
                <h3>FILTER GAMES</h3>
                 <Button 
                 className="m-2"
                 outline squared theme="info"
                 onClick={() => axios.get(`${API_ROUTE}/games`).then(res => {this.setState({gameGenres: res.data.games})})}>
                 ALL GAMES
                </Button>
                {genres.map(genre => {return (
                    <Button 
                    key={genre.id}
                    className="m-2"
                    outline squared theme="info"
                    onClick={() => axios.get(`${API_ROUTE}/games?genre_id=${genre.id}`).then(res => {this.setState({gameGenres: res.data.games})})}>
                    {genre.name}
                    </Button>
                )}
                )}
                </center>
                <Row className="game-filter">
                {gameGenres.map(game => { return (
                    <Col key={game.id} sm="12" md="4" lg="3">
                        <Card className="card-image">
                        <CardImg top src={game.image_url} onClick={history.push(`/game/${game.id}`)} className="card-image"/>
                            <CardBody>
                            <CardTitle><Link to={`/game/${game.id}`}>{game.title}</Link></CardTitle>
                            {game.genres.map(genre => <Col sm="12" key={genre.id}><img className="genre-image" src={desktop} alt="" width="20px" height="20px"/> {genre.name}</Col>)}
                            {readMore ? game.description : game.description.substring(0, 50)}
                            <Link onClick={()=> this.setState({readMore: !readMore})}>
                                {readMore ? '...Show Less' : '...Read More'}
                            </Link>
                            </CardBody>
                        </Card>
                        <br/>
                    </Col>
                )})}
                </Row>
            </Container>
         );
    }  
}
    
 
export default GameFilter;