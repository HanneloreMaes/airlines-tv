import React from "react";
import './popup.scss'
import DetailPage from "../Detail Episode/detailEpisode";

function Popup(props : any) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
            </div>
        </div>
    ): <div>""</div> ;
}
export default Popup