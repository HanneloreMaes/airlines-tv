import { Store } from 'redux';
import { EpisodeState } from './InitialState';

export interface StoreState extends Store {
  episode: EpisodeState;
}