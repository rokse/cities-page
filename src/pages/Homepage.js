import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(countries => {
      setCountries(countries);
    });
  }, []);

  const renderCountries = () => {
    return countries.map((country, index) => {
      let imageSrc = country.flags.png;
      let countryName = country.name.common;

      return (
      <li key={index} className='list-item'>
        <Link to={'/countries/' + countryName}>
          <img src={imageSrc} alt={countryName + ' flag'} height='100px' width='160px' />
        </Link>
      </li>
      );
    });
  };


  return (
    <>
    <div className='wrap'>
      <h1>Select flag to view country:</h1>
      <ul className='Countries-flag-list'>
        {renderCountries()}
      </ul>
    </div>
    </>
  );
};

export default Homepage;