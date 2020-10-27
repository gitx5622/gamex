import React, { Component } from 'react';
import Blog from './blog';
import HomeCarousel from './carousel';
import Footer from './footer';
import GameFilter from './genreFilter';
import Released from './released';
import SearchBox from './searchBox';
import AllGames from './allGames';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <HomeCarousel/>
                <GameFilter/>
                <AllGames/>
                <SearchBox/>
                <Released/>
                <Blog/>
                <Footer/>
            </div>
         );
    }
}
 
export default Home;