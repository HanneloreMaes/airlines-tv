import React, { useEffect, useState } from "react";
import './episode.css';

function episodeInfo (props: any) {
    
    return(
        <div className="episodeList">
            <div className="hourTitle">
                <p className="airTime">{props.airtime}</p>
                <p>-</p>
                <h2>{props.name}</h2>
            </div>
            <div className="typeSummary">
                <div className="typeName">
                    <p className="showName">{props.showName}</p>
                    <p className="showName">-</p>
                    <p className="showName typeSmall">{props.showType}</p>
                </div>
                <p className="showName">{props.summary}</p>
            </div>
        </div>
    )
}

export default episodeInfo;