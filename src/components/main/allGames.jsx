import React, { Component } from 'react'
import {Container, Row, Col,Card, CardBody,CardImg, CardTitle} from 'shards-react';
import Pagination from "react-js-pagination";
import axios from "axios";
import API_ROUTE from '../../utils/constants';
import desktop from "../../assets/desktop.png";

class AllGames extends Component {
    state = {
        games:[],
        activePage: 1
     }
     
    handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }
    activePage = this.state.activePage
    
    async componentWillUpdate() {
        const {data:gamePagination} = await axios.get(`${API_ROUTE}/games?per=4&page=${this.state.activePage}`);
        this.setState({
            games: gamePagination.games
        })
    }

    async componentDidMount() {
        const {data:gamePagination} = await axios.get(`${API_ROUTE}/games?per=4&page=${this.state.activePage}`);
        this.setState({
            games: gamePagination.games
        })
    }
     render() { 
        const { games} = this.state;
         return ( 
             <div>
                 <Container className="p-3">
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
                <Pagination
                itemClass="page-item"
                linkClass="page-link"
                activePage={this.state.activePage}
                itemsCountPerPage={4}
                totalItemsCount={5}
                onChange={this.handlePageChange}
                />
                </Container>
             </div>
          );
     }
 }
  
 export default AllGames;