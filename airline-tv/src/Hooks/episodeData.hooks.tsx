import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EpisodeInfo from '../Components/episode';
import { episodeService } from '../Services/episodesService';
import { fetchEpisode } from '../Store/Facade';
import { EpisodeState } from '../Store/InitialState';
import { selectorEpisodes, selectorEpisodesError } from '../Store/Selectors';

function DataEpisode() {
    const episodes = useSelector<EpisodeState, any>(
      selectorEpisodes
    );
    const error = useSelector<EpisodeState, string>(
      selectorEpisodesError
    );
    const dispatch = useDispatch();
  
    useEffect(() => {
      episodeService.getEpisodes()
      .then(response => {
        dispatch(fetchEpisode(response))
      })
    }, [dispatch]);
  
    return (
      <div>
        {episodes.map((episode: any) => {
          console.log(episode);
          return <EpisodeInfo id={episode['id']} airtime={episode['airtime']} name={episode['name']} season={episode['season']} number={episode['number']} runtime={episode['runtime']} showName={episode['show']['name']} showType={episode['show']['type']} summary={episode['summary']}/>
        })}
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

export default DataEpisode;