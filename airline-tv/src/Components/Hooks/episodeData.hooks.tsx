import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EpisodeInfo from '../Episodes/episode';
import { episodeService } from '../../Services/episodesService';
import { useLoading } from './isLoading.hooks';

import { fetchEpisodes } from '../../Store/Actions';
import { Episode, EpisodeState } from '../../Store/InitialState';
import { selectEpisodes, selectEpisodesError } from '../../Store/Selectors';
import { StoreState } from '../../Store/StoreState';

export default () => {
    const episodes = useSelector<StoreState, Episode[]>(
      selectEpisodes
    );
    const error = useSelector<StoreState, string>(
      selectEpisodesError
    );
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchEpisodes());
    }, [dispatch]);
  
    const renderEpisodes = (episodes: Episode[]) => {
      return episodes.map((episode) => {
        <EpisodeInfo id={episode.id} airtime={episode.airtime} name={episode.name} showName={episode.showName} showType={episode.showType} show={episode.networkName}/>
      });
    };
  
    return (
      <div>
        {renderEpisodes(episodes)}
      </div>
    );
  };

// function DataEpisode(props: any){
//     const [episodes, setEpisodes]=useState([]);
//     const isLoading = useLoading(episodes)

//     useEffect(() => {
//         episodeService.getEpisodes(props).then((response) => {
//             setEpisodes(response);
//         })
//     }, [props]);
//     return(
//         <div>
//             <p>
//                 { isLoading? 'Loading shows' :
//                     episodes.map((episode) => {
//                         return <EpisodeInfo id={episode["id"]} airtime={episode['airtime']} name={episode['name']} showName={episode['show']['name']} showType={episode['show']['type']} show={episode['show']['network']['name']}/>
//                     })
//                 }
//             </p>
            
//         </div>
//     )
    
    
// }

// export default DataEpisode;