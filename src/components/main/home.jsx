import React, { Component } from 'react';
import HomeCarousel from './carousel';
import FeaturedGames from './featuredGames';
import Footer from './footer';
import GameFilter from './gameFilter';
import SearchBox from './searchBox';


class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <HomeCarousel/>
                <GameFilter/>
                <SearchBox/>
                <FeaturedGames/>
                <Footer/>
            </React.Fragment>
         );
    }
}
 
export default Home;