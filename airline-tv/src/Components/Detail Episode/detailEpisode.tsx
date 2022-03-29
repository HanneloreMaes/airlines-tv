import React from "react";
import Episode from "../Episodes/episode";
import { BrowserRouter, useParams } from "react-router-dom";

function DetailPage(){
    let params = useParams()
    return (
        <div>
            <h1>Dit is een detail page</h1>
        </div>
    )
}

export default DetailPage