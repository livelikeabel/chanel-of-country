import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadCountries } from "../ducks/country";

const CountryContainer = ({ loadCountries, countries }) => {
  useEffect(() => {
    loadCountries()
  }, []);

  return (
    <div>
      {/*<Country countries={countries}/>*/}
    </div>
  )
};

const mapStateToProps = ({ country }) => ({ countries: country.countries });
const mapDispatchToProps = { loadCountries };

export default connect(mapStateToProps, mapDispatchToProps)(CountryContainer);
