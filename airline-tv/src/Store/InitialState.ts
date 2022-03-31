export interface Episode {
    id: string;
    airtime: string;
    name: string;
    showName: string;
    showType: string;
    networkName: string;
    summary: string;
    season: string;
    number: string;
    runtime: string;
  }
  
  export interface EpisodeState {
    loading: boolean;
    error: any;
    list: Episode[];
  }
  
  export const initialState = {
    loading: false,
    error: null,
    list: [],
  };
  