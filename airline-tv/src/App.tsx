import React, { useState } from 'react';
import './App.scss';
import Data from './Hooks/episodeData.hooks';

function App(){
  return(
    <div className = "listOverview">
      <Data/>
    </div>
  )
  
}

export default App;
