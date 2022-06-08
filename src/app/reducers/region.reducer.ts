import { createFeatureSelector, createReducer, createSelector } from '@ngrx/store';
import { Region } from '../core/models/region.model';

export const regionFeatureKey = 'region';

export interface State {
  regions: Region[];
}

export const initialState: State = {
  regions: [Region.Asia, Region.Europe],
};

export const reducer = createReducer(initialState);

export const selectFeature = createFeatureSelector<State>(regionFeatureKey);

export const selectRegions = createSelector(selectFeature, (state) => state.regions || []);
