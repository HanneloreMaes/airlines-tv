import React, { useEffect, useState } from "react";
import './episode.css';

function episodeInfo (props: any) {
    
    return(
        <div className="episodeList">
            <div className="hourTitle">
                <p>{props.airtime}</p>
                <h2>{props.name}</h2>
            </div>
            <div className="typeSummary">
                <p>{props.showName}</p>
                <p>{props.showType}</p>
                <p>{props.summary}</p>
            </div>
        </div>
    )
}

export default episodeInfo;