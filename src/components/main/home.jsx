import React, { Component } from 'react';
import Blog from './blog';
import HomeCarousel from './carousel';
import FeaturedGames from './featuredGames';
import Footer from './footer';
import GameFilter from './gameFilter';
import Released from './released';
import SearchBox from './searchBox';


class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <HomeCarousel/>
                <GameFilter/>
                <SearchBox/>
                <FeaturedGames/>
                <Released/>
                <Blog/>
                <Footer/>
            </div>
         );
    }
}
 
export default Home;