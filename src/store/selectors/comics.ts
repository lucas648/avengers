import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ComicsState } from '../reducers/comics';

export const selectComicsState = createFeatureSelector<ComicsState>('comics');

export const selectComics = createSelector(
  selectComicsState,
  (state: ComicsState) => state
);