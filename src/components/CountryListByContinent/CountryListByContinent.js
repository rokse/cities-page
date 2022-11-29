import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './CountryListByContinent.css';
import axios from 'axios';

 const CountryListByContinent = () => {
  let params = useParams();

  const [countries, setCountries] = useState([]);
  const [paramsId, setParamsId] = useState(params.regionName)

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/subregion/${paramsId}`)
    .then((response) => {
      setCountries(response.data)
    })
    .catch(error => {
      alert(error + ' , please try again later');
    })
  }, [paramsId]);

  const renderCountriesList = () => {
    return countries.map((country, index) => {
      let countryName = country.name.common;
      let imageUrl = country.flags.png;

      return (
        <li key={index} className='list-item'>
          <Link to={'/countries/' + countryName}>
            <img src={imageUrl} alt={countryName + ' flag'} height='100px' width='160px' />
          </Link>
          <p>{countryName}</p>
        </li>
      );
    });
  };

  return (
    <div className='wrap continent-countries-wrap'>
      <h1>Countries in {(params.regionName).toUpperCase()}:
      </h1>
      <ul className='countries-by-continent'>
        {renderCountriesList()}
      </ul>
    </div>
  );
};

export default CountryListByContinent;