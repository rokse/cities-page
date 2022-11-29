import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate('./search/' + searchInput);
    setSearchInput('');
  };
  
  return (
    <>
    <div className='main-nav'>
      <div className='wrap'>
        <ul className='nav-menu'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/continents'>Continents</Link></li>
        </ul>
        <form onSubmit={handleSubmit} >
          <input type='text' name='search' id='search' value={searchInput} onChange={event => setSearchInput(event.target.value)} />
          <input type='submit' value='Search' />
        </form>
      </div>
    </div>
    </>
  );
};

export default Navigation;