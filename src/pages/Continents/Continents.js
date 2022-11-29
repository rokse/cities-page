import React from 'react';
import { Link } from 'react-router-dom';
import './Continents.css';

const Continents = ({ data: { europe, asia, africa, australia, northAmerica, southAmerica } }) => {
  return (
    <div className='wrap continent-bg'>
      <h1>Continents:</h1>
      <div className='world-map'>
        <Link to='/continents/countries/north%20america'>
          <div className='north-america continent'>
            {northAmerica}
          </div>
        </Link>
        <Link to='/continents/countries/europe'>
          <div className='europe continent'>
            {europe}
          </div>
        </Link>
        <Link to='/continents/countries/asia'>
          <div className='asia continent'>
            {asia}
          </div>
        </Link>
        <Link to='/continents/countries/south%20america'>
          <div className='south-america continent'>
            {southAmerica}
          </div>
        </Link>
        <Link to='/continents/countries/africa'>
          <div className='africa continent'>
            {africa}
          </div>
        </Link>
        <Link to='/continents/countries/australia'>
          <div className='australia continent'>
            {australia}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Continents;