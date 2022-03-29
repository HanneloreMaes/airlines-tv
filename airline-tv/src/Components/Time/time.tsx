import React, { useEffect, useState } from "react";

function Time(){
    const today = new Date()
    let timeStamp = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    return(
        <div>
            {timeStamp}
        </div>
    ) 
}
export default Time;