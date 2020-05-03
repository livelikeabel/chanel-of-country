import { ofType } from 'redux-observable';
import { LOAD_COUNTRIES, loadCountriesSuccess } from "../ducks/country";
import { catchError, map, switchMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { of } from "rxjs";

const COUNTRY_API = 'https://restcountries.eu/rest/v2/all?fields=alpha2Code;capital;name;region;callingCodes';

const countryEpic = action$ => action$.pipe(
  ofType(LOAD_COUNTRIES),
  switchMap(() => {
    return ajax(COUNTRY_API).pipe(
      map(({ response }) => {
        return loadCountriesSuccess(response);
      }),
      catchError(err => {
        console.err(err);
        return of(err);
      })
    )
  })
);

export default countryEpic;
