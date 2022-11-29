import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import './SearchPage.css';

const SearchPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [countries, setCountries] = useState([]);
  const [paramsId, setParamsId] = useState(params.searchInput);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${paramsId}`)
      .then((response) => {
        setCountries(response.data)
      })
      .catch(error => {
        alert(error + ' , please try again later');
        navigate('/')
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
    <div className='wrap search-countries-wrap'>
      <h1>Countries found:</h1>
      <ul className='countries-by-search'>
        {renderCountriesList()}
      </ul>
    </div>
  )
}

export default SearchPage;