import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../assets/css/styles.css';
import Countries from './Countries';
import CountryDetail from './CountryDetail';
import CountryFilters from './CountryFilters';
import Footer from './Footer';
import Header from './Header';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [regionFilter, setRegionFilter] = useState('All');
  useEffect(() => {
    let cacheCountries = null;
    try {
      cacheCountries = localStorage.getItem('countries');
    }
    catch (err) {
    }
    if (cacheCountries == null) {
      const allCountriesAPI = 'https://restcountries.com/v2/all';
      fetch(allCountriesAPI)
        .then(response => response.json())
        .then((json) => { try { localStorage.setItem('countries', JSON.stringify(json)); } catch (err) { } setCountries(json) });
    }
    else {
      setCountries(JSON.parse(cacheCountries));
    }

  }, []);

  const handleInputSearch = (searchString) => {
    setSearchString(searchString);
  }
  const handleRegionFilter = (regionFilter) => {
    setRegionFilter(regionFilter);
  }

  const filterByRegion = (countries, RegionFilter) => {
    return countries.filter((country) => {
      if (regionFilter === 'All') {
        return true
      }
      return country.region === regionFilter;
    });
  }
  const filterbySearchString = (countries, searchString) => {
    return countries.filter((country) => {
      if (searchString === '' || searchString == null) {
        return true;
      }
      if (country.name.search(new RegExp(searchString, 'i')) !== -1) {
        return true;
      }
      return false;
    })
  }
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <>
              <div className="min-h-screen px-12 py-4">
                <CountryFilters regionFilter={regionFilter} searchString={searchString} handleRegionFilter={handleRegionFilter} handleInputSearch={handleInputSearch} />
                <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-4">
                  <Countries countries={filterByRegion(filterbySearchString(countries, searchString), regionFilter)} />
                </div>
              </div>
            </>
          </Route>
          <Route path="/detail/:countryCode" exact >
            <CountryDetail countries={countries} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
