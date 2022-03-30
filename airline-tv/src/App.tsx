import React from 'react';
import './App.scss';
import Data from './Components/Hooks/episodeData.hooks';

function Overzicht(){

  return (
    <div className = "listOverview">
      <Data/>
    </div>
  )
}

export default Overzicht;
