import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Countries.css'

const Country = () => {
  let params = useParams();

  const [countries, setCountries] = useState([]);
  const [paramsId, setParamsId] = useState(params.countryName)

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${paramsId}?fullText=true`)
      .then(res => res.json())
      .then(countriesObj => {
        setCountries(countriesObj);
      });
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