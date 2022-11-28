import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Continents from './pages/Continents';
import Navigation from './components/Navigation/Navigation';
import Country from './components/Country/Country';
import CountryListByContinent from './components/CountryListByContinent/CountryListByContinent';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes className='site-wrap'>
        <Route path='/' element={<Homepage />} />
        <Route path='/continents' element={<Continents />} />
        <Route path='/continents/countries/:regionName' element={<CountryListByContinent />} />
        <Route path='/countries/:countryName' element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
