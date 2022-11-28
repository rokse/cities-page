import React from 'react';
import { ReactComponent as EuropeSvg } from '../images/Europe.svg';
import { ReactComponent as AfricaSvg } from '../images/Africa.svg';
import { ReactComponent as AsiaSvg } from '../images/Asia.svg';
import { ReactComponent as AustraliaSvg } from '../images/Australia.svg';
import { ReactComponent as NorthAmericaSvg } from '../images/NorthAmerica.svg';
import { ReactComponent as SouthAmericaSvg } from '../images/SouthAmerica.svg';
import { Link } from 'react-router-dom';
import './Continents.css';

const Continents = () => {
  return (
    <div className='wrap continent-bg'>
      <h1>Continents:</h1>
      <div className='world-map'>
        <Link to='/continents/countries/north%20america'>
          <div className='north-america continent'>
            North America
          </div>
        </Link>
        <Link to='/continents/countries/europe'>
          <div className='europe continent'>
            Europe
          </div>
        </Link>
        <Link to='/continents/countries/asia'>
          <div className='asia continent'>
            Asia
          </div>
        </Link>
        <Link to='/continents/countries/south%20america'>
          <div className='south-america continent'>
            South America
          </div>
        </Link>
        <Link to='/continents/countries/africa'>
          <div className='africa continent'>
            Africa
          </div>
        </Link>
        <Link to='/continents/countries/australia'>
          <div className='australia continent'>
            Australia
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Continents;