import React, { Component } from 'react';
import '../index.css';

const SearchBox = (props) => (
    <div>
        <input className="search"
            type="search"
            placeholder="Search Robots..."
            onChange={props.onSearchChange}
            height="200px"
            />
    </div>
);


export default SearchBox;