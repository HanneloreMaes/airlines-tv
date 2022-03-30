import React, {useEffect, useState} from 'react';
import EpisodeInfo from '../Episodes/episode';
import { episodeService } from '../Services/episodesService';
import { useLoading } from './isLoading.hooks';

function DataEpisode(props: any){
    const [episodes, setEpisodes]=useState([]);
    const isLoading = useLoading(episodes)

    useEffect(() => {
        episodeService.getEpisodes(props).then((response) => {
            setEpisodes(response);
        })
    }, [props]);
    return(
        <div>
            <p>
                { isLoading? 'Loading shows' :
                    episodes.map((episode) => {
                        return <EpisodeInfo id={episode["show"]["id"]} airtime={episode['airtime']} name={episode['name']} showName={episode['show']['name']} showType={episode['show']['type']} show={episode['show']['network']['name']}/>
                    })
                }
            </p>
            
        </div>
    )
    
    
}

export default DataEpisode;