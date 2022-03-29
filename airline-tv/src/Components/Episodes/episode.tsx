import React, { useEffect, useState } from "react";
import './episode.css';
import OnClickNav from "../Hooks/onClickNav.hooks";
import { Link, Outlet } from "react-router-dom";


function EpisodeInfo (props: any) {
    
    return(
        <div className="episodeList">
            <div className="centerContainer">
                <p className="airTime">{props.airtime}</p>
                <h2>{props.name}</h2>
                <div className="showNameType">
                    <p className="showName">{props.showName}</p>
                    <p className="showName">-</p>
                    <p className="showName typeSmall">{props.showType}</p>
                    <p className="showName">{props.showSummary}</p>
                </div>
            </div>
            <button><Link to={`/episodes/${props.id}`} key={props.id}>To details</Link></button>
            <Outlet/>
        </div>
    )
}

export default EpisodeInfo;