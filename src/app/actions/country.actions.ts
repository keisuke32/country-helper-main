import { createAction, props } from '@ngrx/store';
import { Region } from '../core/models/region.model';
import { Country } from '../core/models/country.model';

export const loadCountries = createAction('[Country] Load Countries', props<{ region: Region }>());

export const loadCountriesSuccess = createAction('[Country] Load Countries Success', props<{ countries: Country[] }>());

export const loadCountriesFailure = createAction('[Country] Load Countries Failure', props<{ error: any }>());

export const selectCountry = createAction('[Country] Select Country', props<{ country: Country }>());
