import React from 'react';

const CountryItem = ({ country: { alpha2Code, name, capital, region, callingCodes } }) => {
  return (
    <tr>
      <td>{alpha2Code}</td>
      <td>{name}</td>
      <td>{capital}</td>
      <td>{region}</td>
      <td>{callingCodes.join(', ')}</td>
    </tr>
  )
};

const Country = ({ countries }) => {
  return (
    <table>
      <thead>
      <tr>
        <th>Alpha To Code</th>
        <th>Name</th>
        <th>Capital</th>
        <th>Region</th>
        <th>Calling Codes</th>
      </tr>
      </thead>
      <tbody>
      {countries.map(country => <CountryItem country={country} key={country.alpha2Code}/>)}
      </tbody>
    </table>
  )
};

export default Country;
