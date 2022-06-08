import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Country } from '../core/models/country.model';
import { Region } from '../core/models/region.model';
import { loadCountries, loadCountriesFailure, loadCountriesSuccess, selectCountry } from '../actions/country.actions';

export const countryFeatureKey = 'country';

export interface State {
  countries: Country[];
  selectedCountry: Country | null;
  region: Region | null;
  isLoading: boolean;
  error: any;
}

export const initialState: State = {
  countries: [],
  selectedCountry: null,
  region: null,
  isLoading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(loadCountries, (state, { region }) => ({ ...state, region, isLoading: true, error: null, selectedCountry: null })),
  on(loadCountriesSuccess, (state, { countries }) => ({ ...state, countries, isLoading: false })),
  on(loadCountriesFailure, (state, { error }) => ({ ...state, isLoading: false, error })),
  on(selectCountry, (state, { country }) => ({ ...state, selectedCountry: country }))
);

export const selectFeature = createFeatureSelector<State>(countryFeatureKey);

export const selectCountries = createSelector(selectFeature, (state) => state.countries);
export const selectIsLoading = createSelector(selectFeature, (state) => state.isLoading);
export const selectError = createSelector(selectFeature, (state) => state.error);
export const selectSelectedCountry = createSelector(selectFeature, (state) => state.selectedCountry);
