import React, {useState } from "react";
import './episode.scss'
import OnClickNav from "../Hooks/onClickNav.hooks";
import { Link, Outlet } from "react-router-dom";
import Popup from "../Popup/popUp";


function EpisodeInfo (props : any) {
    return(
        <div className="episodeList" id={props.id}>
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
            <button className="btn-1"><Link to={`/episodes/${props.id}`} key={props.id}>Details</Link></button>
            <Outlet/>
        </div>
    )
}

export default EpisodeInfo;