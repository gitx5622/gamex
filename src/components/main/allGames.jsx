import React, { Component } from 'react'
import {Container, Row, Col,Card, CardBody,CardImg, CardTitle} from 'shards-react';
import axios from "axios";
import API_ROUTE from '../../utils/constants';
import desktop from "../../assets/desktop.png";

class AllGames extends Component {
    state = {
        games:[],
     }

    async componentDidMount() {
        const {data:gameData} = await axios.get(`${API_ROUTE}/games`);
        this.setState({
            games: gameData.games
        })
    }
     render() { 
        const { games} = this.state;
         return ( 
             <div>
                 <Container className="p-2">
                 <center><h3>ALL GAMES</h3></center>
                 <Row className="game-filter">
                 {games.map(game => { return (
                    <Col key={game.id} sm="12" md="4" lg="3">
                        <Card className="card-image">
                        <CardImg top src={game.image_url} className="card-image"/>
                            <CardBody>
                            <CardTitle>{game.title}</CardTitle>
                            {game.genres.map(genre => <Col key={genre.id}><img src={desktop} alt="" width="20px" height="20px"/> {genre.name}</Col>)}
                            </CardBody>
                        </Card>
                        <br/>
                    </Col>
                )})}
                </Row>
                </Container>
             </div>
          );
     }
 }
  
 export default AllGames;