import React, {useEffect, useState} from 'react';
import EpisodeInfo from './episode';
import ReactDOM from 'react-dom';

function DataEpisode(){
    const [episodes, setEpisodes]=useState([])
    useEffect(() => {
        const url = `https://api.tvmaze.com/schedule?country=US&date=2014-12-01`
        fetch(url).then(resp => resp.json())
        .then(resp => setEpisodes(resp))
    }, [])
    return (
        <div>
            {
                episodes.map(episode =>
                    <EpisodeInfo airtime={episode['airtime']} name={episode['name']} showName={episode['show']['name']} showType={episode['show']['type']} summary={episode['show']['summary']}/>
                )
            }
        </div>
    )
}

export default DataEpisode;