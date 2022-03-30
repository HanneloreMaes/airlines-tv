import { createSelector } from '@reduxjs/toolkit';
import { StoreState } from './StoreState';
import { EpisodeState } from './InitialState';

export const EpisodeStateSelector = (
  state: StoreState
): EpisodeState => state.episode;
export const selectEpisodes = createSelector(
    EpisodeStateSelector,
  (state: EpisodeState) => state?.list || []
);
export const selectEpisodesError = createSelector(
    EpisodeStateSelector,
  (state: EpisodeState) => state?.error
);
