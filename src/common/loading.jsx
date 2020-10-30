import React, { Component } from 'react';
import { SpinnerRoundOutlined } from 'spinners-react';

class Loading extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="spinner">
                <SpinnerRoundOutlined size={100} color="#7EDFEC"/>
            </div>
         );
    }
}
 
export default Loading;