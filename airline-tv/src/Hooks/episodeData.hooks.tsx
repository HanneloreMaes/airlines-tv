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


    function updateData(episodes: any[]){
      const objectZenders:any = {};
      const arrayZenders:any = [];

      episodes.forEach((episode:any) => {
        const link = episode?.show?.network?.name;
        const zenders = Boolean(objectZenders[link]);
  
        if(zenders) {
          objectZenders[link].push(episode);
  
          return;
        }
  
        arrayZenders.push(link);
        objectZenders[link] = [];
        objectZenders[link].push(episode);
      });
      
      console.log("object",objectZenders)

      const zendersInfo = Object.keys(objectZenders).map((zender:any) => {
        return objectZenders[zender].map((episode:any) => {
          return { networkName:episode?.show?.network?.name, id:episode?.id, airtime:episode?.airtime, name:episode?.name, season:episode?.season, number:episode?.number, runtime:episode?.runtime, showName:episode?.show?.name, showType:episode?.show?.type, summary:episode?.summary, image:episode?.show?.image?.medium, showsName: episode?.show?.name, rating: episode?.rating?.average }
        })
      })
      return(        
        zendersInfo.map((zenders) => {
          return (
            <div>
              {zenders.map((zender:any) => <EpisodeInfo {...zender}/>)}
            </div>
          )
        })
      )
    }

    return(
      <div>
        {updateData(episodes)}
      </div>
      )

    // return (
    //   <div>
    //     {updateData(episodes)}
    //     {/* {episodes.map((episode: any) => {
    //       return <EpisodeInfo networkName={episode?.show?.network?.name} id={episode?.id} airtime={episode?.airtime} name={episode?.name} season={episode?.season} number={episode?.number} runtime={episode?.runtime} showName={episode?.show?.name} showType={episode?.show?.type} summary={episode?.summary}/>
    //     })} */}
    //   </div>
    // );
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