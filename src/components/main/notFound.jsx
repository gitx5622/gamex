import React from 'react';
import notfound from "../../assets/notfound.png"

const NotFound = () => {
    return ( 
        <div>
            <img src={notfound} className="not-found" alt="notfound"/>
        </div>
     );
}
 
export default NotFound;