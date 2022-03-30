import React, { useState } from 'react';
import './App.scss';
import Data from './Components/Hooks/episodeData.hooks';
import Popup from './Components/Popup/popUp';

function Overzicht(){
  
  return (
    <div className = "listOverview">
      <Data/>
    </div>
  )
}

export default Overzicht;
