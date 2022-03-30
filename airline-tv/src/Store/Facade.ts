import { Dispatch } from 'redux';
import { Episode } from './InitialState';
import * as ACTIONS from './Actions';

export const fetchSpaceStations = () => {
  return (dispatch: Dispatch): void => {
    dispatch(ACTIONS.fetchEpisodes());

    fetch('https://api.tvmaze.com/schedule?country=US&date=2014-12-01')
      .then(async (response) => {
        if (response.ok) {
          return response.json();
        }

        const { detail } = await response.json();
        return Promise.reject(detail);
      })
      .then((response: any) => {
        const results: Episode[] = response.map(
          (result : any): Episode => {
            return {
                id: result.id,
                airtime: result.airtime,
                name: result.name,
                showName: result.show.name,
                showType: result.show.type,
                networkName: result.show.network.name,
                summary: result.summary
            };
          }
        );

        dispatch(ACTIONS.fetchEpisodesSuccess(results));
      })
      .catch((error: any) => {
        dispatch(ACTIONS.fetchEpisodesError(error));
      });
  };
};
