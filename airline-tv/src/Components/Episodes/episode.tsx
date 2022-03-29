import React, { useEffect, useState } from "react";
import './episode.css'


function episodeInfo (props: any) {
    
    return(
        <div className="episodeList">
            <div className="centerContainer">
                <p className="airTime">{props.airtime}</p>
                <h2>{props.name}</h2>
                <div className="showNameType">
                    <p className="showName">{props.showName}</p>
                    <p className="showName">-</p>
                    <p className="showName typeSmall">{props.showType}</p>
                </div>
            </div>
            
        </div>
    )
}

export default episodeInfo;