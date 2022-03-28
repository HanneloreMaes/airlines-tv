import React from 'react';
import './App.css';
import Data from './Episodes/episode-data'

function Overzicht(){
  return (
    <div className = "listOverview">
      <h1>De overzichtspagina</h1>
      <Data/>
    </div>
  )
}

export default Overzicht;
