import { Dispatch } from 'redux';
import { Episode } from './InitialState';
import * as ACTIONS from './Actions';

export const fetchEpisode = (results: any[]) => {
  return (dispatch: Dispatch): void => {
    dispatch(ACTIONS.fetchEpisodesSuccess(results));
  };
};
