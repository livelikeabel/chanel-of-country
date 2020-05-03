import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadCountries } from "../ducks/country";

const CountryContainer = () => {
  useEffect(() => {
    loadCountries()
  }, []);

  return (
    <div>
      {/*<Country/>*/}
    </div>
  )
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  loadCountries
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryContainer);
