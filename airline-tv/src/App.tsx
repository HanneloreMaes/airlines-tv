import React, { useState } from 'react';
import './App.scss';
import Data from './Hooks/episodeData.hooks';
import { useLoading } from './Hooks/isLoading.hooks';

function App(){
  return(
    <div className = "listOverview">
      <Data/>
    </div>
  )
  
}

export default App;
