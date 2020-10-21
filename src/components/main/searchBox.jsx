import React from "react";
import '../../App.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="searchbox">
    <div className="container">
      <center><h2>Game Search</h2></center>
    <input
      type="text"
      name="query"
      className="form-control my-3"
      placeholder="Search..."
      value={value}
      onChange={e => onChange(e.currentTarget.value)}
    />
    </div>
    </div>
  );
};

export default SearchBox;