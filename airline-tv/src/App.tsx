import React from 'react';
import './App.css';
import Data from './Components/Hooks/episodeData.hooks';
import Time from './Components/Time/time';

function Overzicht(){

  return (
    <div className = "listOverview">
        <Data/>
    </div>
  )
}

export default Overzicht;
