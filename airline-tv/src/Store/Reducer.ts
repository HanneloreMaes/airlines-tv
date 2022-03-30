import { createReducer } from '@reduxjs/toolkit';
import { EpisodeState, initialState } from './InitialState';
import * as ACTIONS from './Actions';

const EpisodeReducer = createReducer<EpisodeState>(
  initialState,
  (builder) => {
    builder.addCase(ACTIONS.fetchEpisodes, (state): EpisodeState => {
      return {
        ...state,
        loading: true,
        error: null,
        list: [],
      };
    });

    builder.addCase(
      ACTIONS.fetchEpisodesSuccess,
      (state, action): EpisodeState => {
        return {
          ...state,
          loading: false,
          error: null,
          list: action.payload,
        };
      }
    );

    builder.addCase(
      ACTIONS.fetchEpisodesError,
      (state, action): EpisodeState => {
        return {
          ...state,
          loading: false,
          list: [],
          error: action.payload,
        };
      }
    );
  }
);
export default EpisodeReducer