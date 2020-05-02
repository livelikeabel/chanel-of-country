import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadCountries } from "../ducks/country";

const Main = ({ loadCountries }) => {
  useEffect(() => {
    loadCountries()
  }, []);

  return (
    <div>hi</div>
  )
};

export default connect(
  () => ({}),
  { loadCountries }
)(Main);
