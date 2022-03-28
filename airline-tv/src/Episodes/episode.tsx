import React from "react";

function episodeInfo(props: any){
    return(
        <div>
            <h2>{props.name}</h2>
            <ul>
                <li>{props.airtime}</li>
                <li>{props.summary}</li>
                <li>{props.showName}</li>
                <li>{props.showType}</li>
            </ul>
        </div>
    )
}
export default episodeInfo;