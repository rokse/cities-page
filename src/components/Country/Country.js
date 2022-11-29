import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Countries.css';
import axios from 'axios';
import { ReactComponent as LeftArrow } from '../../images/LeftArrow.svg';
import { ReactComponent as RightArrow } from '../../images/RightArrow.svg';

const Country = () => {
  let params = useParams();
  let navigate = useNavigate();

  const [countries, setCountries] = useState([]);
  const [paramsId, setParamsId] = useState(params.countryName)
  const [countriesArr, setCountriesArr] = useState([])
 
  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${paramsId}?fullText=true`)
    .then((response) => {
      setCountries(response.data)
    })
    .catch(error => {
      alert(error + ' , please try again later');
    })
  }, [paramsId]);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all`)
    .then((response) => {
      let newArr = [];
      response.data.map(country => {
        newArr.push(country.name.common) 
      })
      setCountriesArr(newArr);
    })
    .catch(error => {
      alert(error + ' , please try again later');
    })
  }, []);

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

  const clickLeftHandler = () => {
    let indexOfCurrentCountry = countriesArr.indexOf(paramsId)
    if (indexOfCurrentCountry > 0 && indexOfCurrentCountry < 250) {
      let newCountry = countriesArr[indexOfCurrentCountry - 1]
      setParamsId(newCountry)
      navigate('/countries/' + paramsId)
    } else {
      setParamsId(countriesArr[249])
      navigate('/countries/' + paramsId)
    }
  }

  const clickRightHandler = () => {
    let indexOfCurrentCountry = countriesArr.indexOf(paramsId)
    if (indexOfCurrentCountry < 249 && indexOfCurrentCountry >= 0) {
      let newCountry = countriesArr[indexOfCurrentCountry + 1]
      setParamsId(newCountry)
      navigate('/countries/' + paramsId)
    } else {
      setParamsId(countriesArr[0])
      navigate('/countries/' + paramsId)
    }
  }

  return (
    <div className='wrap country-page'>
      <LeftArrow className='arrow' onClick={clickLeftHandler}></LeftArrow>
      {renderCountry()}
      <RightArrow className='arrow' onClick={clickRightHandler}></RightArrow>
    </div>
  );
};

export default Country;