import React, { useEffect, useState } from "react";
import './episode.css';

function episodeInfo (props: any) {
    
    return(
        <div className="episodeList">
            <div className="hourTitle">
                <p>{props.airtime}</p>
                <p>-</p>
                <h2>{props.name}</h2>
            </div>
            <div className="typeSummary">
                <p className="">{props.showName}</p>
                <p>{props.showType}</p>
                <p>{props.summary}</p>
            </div>
        </div>
    )
}

export default episodeInfo;