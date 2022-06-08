import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCountry from './country.reducer';
import * as fromRegion from './region.reducer';

export interface State {
  [fromCountry.countryFeatureKey]: fromCountry.State;
  [fromRegion.regionFeatureKey]: fromRegion.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromCountry.countryFeatureKey]: fromCountry.reducer,
  [fromRegion.regionFeatureKey]: fromRegion.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
