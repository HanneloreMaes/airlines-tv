import React, {useEffect, useState} from 'react';
import EpisodeInfo from '../Episodes/episode';
import { episodeService } from '../Services/episodesService';
import { useLoading } from './isLoading.hooks';


function DataEpisode(props: any){
    const [episodes, setEpisodes]=useState([]);
    const isLoading = useLoading(episodes);

    useEffect(() => {
        episodeService.getEpisodes(props).then((response) => {
            setEpisodes(response);
        })
    }, [props]);

    return(
        <div>
            {
                isLoading ? 'Inladen is bezig' : 
                episodes.map(episode =>
                    <EpisodeInfo airtime={episode['airtime']} name={episode['name']} showName={episode['show']['name']} showType={episode['show']['type']} summary={episode['show']['summary']}/>
                )
            }
        </div>
    )

    
}

export default DataEpisode;