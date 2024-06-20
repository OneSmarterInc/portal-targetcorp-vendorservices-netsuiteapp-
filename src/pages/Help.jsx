import React from 'react';
import './SearchBar.css';
import Navbar from '../components/Navbar';

const SearchBar = () => {
  return (
    <>
    <Navbar />
    
    <div className="search-bar-container">
      <h2>How Can We Help You?</h2>
      <div className="search-bar">
        <input type="text" placeholder="Find help articles on various topics"/>
        <button type="submit">SEARCH</button>
      </div>
    </div>
    </>
  );
};

export default SearchBar;
