import { createSelector } from '@reduxjs/toolkit';
import { StoreState } from './StoreState';
import { EpisodeState, Episode } from './InitialState';

export const selectorEpisodes = (
  state: EpisodeState
): any => {
  return state.list
};

export const selectorEpisodesError = (state: EpisodeState) => state ?.error
