import React from 'react'
import { Button } from "shards-react";

const Genres = ({categories, filteredItems}) => {
    return ( 
        <div>
        {categories.map((category, index) => { return (
        <Button 
        className="m-2" outline squared theme="info" 
        key={index}
        onClick={() => filteredItems(category)}>
        {category}
        </Button>
        );
      })}
        </div>
     );
}
 
export default Genres;