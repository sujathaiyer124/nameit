import React from 'react';
import './Search.css';
const Searchbox = ({ onInputChange }) => {
    return (
        <div className="Search-container">
            <input onChange={(event) => onInputChange(event.target.value)}
                placeholder="Type Keywords" className="search-input" />
        </div>
    );
};
export default Searchbox;