import React, {useEffect, useState} from 'react';
import EpisodeInfo from '../Episodes/episode';
import { episodeService } from '../Services/episodesService';


function DataEpisode(props: any){
    const [episodes, setEpisodes]=useState([]);

    useEffect(() => {
        episodeService.getEpisodes(props).then((response) => {
            setEpisodes(response);
        })
    }, [props]);
    return(
        <div>
            {
                episodes.map((episode) => {
                    return <EpisodeInfo id={episode["show"]["id"]} airtime={episode['airtime']} name={episode['name']} showName={episode['show']['name']} showType={episode['show']['type']} show={episode['show']['network']['name']}/>
                })
            }
        </div>
    )
    
    
}

export default DataEpisode;