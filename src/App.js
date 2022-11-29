import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Continents from './pages/Continents/Continents';
import Navigation from './components/Navigation/Navigation';
import Country from './components/Country/Country';
import CountryListByContinent from './components/CountryListByContinent/CountryListByContinent';
import SearchPage from './pages/SearchPage/SearchPage';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes className='site-wrap'>
        <Route path='/' element={<Homepage />} />
        <Route path='/continents' element={<Continents />} />
        <Route path='/search/:searchInput' element={<SearchPage />} />
        <Route path='/continents/countries/:regionName' element={<CountryListByContinent />} />
        <Route path='/countries/:countryName' element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
