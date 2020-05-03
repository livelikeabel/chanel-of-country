export const LOAD_COUNTRIES = 'LOAD_COUNTRIES';
export const LOAD_COUNTRIES_SUCCESS = 'LOAD_COUNTRIES_SUCCESS';

export const loadCountries = () => ({ type: LOAD_COUNTRIES });
export const loadCountriesSuccess = countries => ({ type: LOAD_COUNTRIES_SUCCESS, countries });

const INITIAL_STATE = {
  countries: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_COUNTRIES_SUCCESS:
      return { ...state, countries: action.countries };
    default:
      return state;
  }
}
