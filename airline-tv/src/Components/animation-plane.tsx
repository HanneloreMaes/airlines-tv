import React from "react";
import Image from '../Img/Airplane-animation.png'
import '../SCSS/animation-plane.scss'

function PlaneAnimation(){
    return (
        <div className="flier">
            <img src={Image} alt="image-plane" id="planeAni"/>
        </div>
    )
}

export default PlaneAnimation