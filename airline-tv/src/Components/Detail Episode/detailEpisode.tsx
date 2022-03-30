import React, { useEffect, useState } from "react";
import './detailEpisode.scss';
import axios from "axios";
import { episodeService } from "../Services/episodesService";
import { BrowserRouter, useParams } from "react-router-dom";

function DetailPage(){
    const[details, setDetails] = useState(null)
    let {id} = useParams()
    const url=`https://api.tvmaze.com/episodes/${id}`

    let content = null

    useEffect(() => {
        axios.get(url)
            .then(resp => {
                setDetails(resp.data)
        })
    }, [url])

    if(details){
        content = 
        <div>
            <img src={details["image"]["medium"]}/>
                <h1>{details["name"]}</h1>
                <p>Season: {details["season"]}</p>
                <p>Episode: {details["number"]}</p>
                <p>Duration: {details["runtime"]}min.</p>
                <p>Summary: {details["summary"]}</p>
        </div>
    }

    return (
        <div>
            {
            content
            }
        </div>
    )

}

export default DetailPage