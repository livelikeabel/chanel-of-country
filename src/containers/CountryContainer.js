import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadCountries } from "../ducks/country";
import Country from "../components/Country.jsx";

const CountryContainer = ({ loadCountries, countries }) => {
  useEffect(() => {
    loadCountries()
  }, [loadCountries]);

  return (
    <div>
      {
        countries.length !== 0 &&
        <Country countries={countries}/>
      }
    </div>
  )
};

const mapStateToProps = ({ country }) => ({ countries: country.countries });
const mapDispatchToProps = { loadCountries };

export default connect(mapStateToProps, mapDispatchToProps)(CountryContainer);
