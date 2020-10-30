import React, { Component } from 'react';
import Blog from './blog';
import HomeCarousel from './carousel';
import Footer from './footer';
import GameFilter from './genreFilter';
import Released from './released';
import Reviews from './reviews';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <HomeCarousel/>
                <GameFilter/>
                <Released/>
                <Reviews/>
                <Blog/>
                <Footer/>
            </div>
         );
    }
}
 
export default Home;