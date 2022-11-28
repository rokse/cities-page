import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './CountryListByContinent.css';

const CountryListByContinent = () => {
  let params = useParams();

  const [countries, setCountries] = useState([]);
  const [paramsId, setParamsId] = useState(params.regionName)

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/subregion/${paramsId}`)
      .then(res => res.json())
      .then(countriesArr => {
        setCountries(countriesArr);
      });
  }, [paramsId]);

  const renderCountriesList = () => {
    return countries.map((country, index) => {
      let countryName = country.name.common;
      let imageUrl = country.flags.png;

      return (
        <li key={index} className='list-item'>
          <Link to={'/countries/' + countryName}>
            <img src={imageUrl} alt={countryName + ' flag'} height='100px' width='160px' />
            <p>{countryName}</p>
          </Link>
        </li>
      );
    });
  };

  return (
    <div className='wrap'>
      <h1>Countries in {(params.regionName).toUpperCase()}:
      </h1>
      <ul className='countries-by-continent'>
        {renderCountriesList()}
      </ul>
    </div>
  );
};

export default CountryListByContinent;