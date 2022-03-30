import { createAction } from '@reduxjs/toolkit';
import { Episode } from './InitialState';

export const fetchEpisodes = createAction('@@EPISODES/FETCH');
export const fetchEpisodesSuccess = createAction<Episode[]>(
  '@@EPISODES/FETCHSUCCES'
);
export const fetchEpisodesError = createAction<{
  results: Episode[];
}>('@@EPISODES/FETCHERROR');
