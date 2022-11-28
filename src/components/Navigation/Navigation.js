import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


  };
  
  return (
    <>
    <div className='main-nav'>
      <div className='wrap'>
        <ul className='nav-menu'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/continents'>Continents</Link></li>
        </ul>
        <form onSubmit={handleSubmit}>
          <input type='text' name='search' id='search' value={searchInput} onChange={event => setSearchInput(event.target.value)} />
          <input type='submit' value='Search' />
        </form>
      </div>
    </div>
    </>
  );
};

export default Navigation;