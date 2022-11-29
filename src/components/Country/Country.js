import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Countries.css';
import axios from 'axios';

const Country = () => {
  let params = useParams();

  const [countries, setCountries] = useState([]);
  const [paramsId, setParamsId] = useState(params.countryName)

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${paramsId}?fullText=true`)
    .then((response) => {
      setCountries(response.data)
    })
    .catch(error => {
      alert(error + ' , please try again later');
    })
  }, [paramsId]);

  const renderCountry = () => {
    return countries.map((country, index) => {
      return (
        <div className='country-card' key={index}>
          <h1>{country.name.official}</h1>
          <div className='image-wrap'>
            <img src={country.flags.png} alt={country.name.official + ' flag'} />
            {country.coatOfArms.png && <img src={country.coatOfArms.png} alt={country.name.official + ' coat of arms'} />}
          </div>
          <p><strong>Area: </strong>{country.area} km2</p>
          <p><strong>Population: </strong>{country.population}</p>
          <p><strong>Capital: </strong>{country.capital[0]}</p>
        </div>
      );
    });
  };

  return (
    <div className='wrap country-page'>
      {renderCountry()}
    </div>
  );
};

export default Country;