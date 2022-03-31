import React, { useState } from 'react';
import './App.scss';
import Data from './Hooks/episodeData.hooks';
import { useModal } from 'react-hooks-use-modal';

function Overzicht(){
  return(
    <div className = "listOverview">
      <Data/>
    </div>
  )
  
}

export default Overzicht;
