import React from 'react';
import { ReactDOM } from 'react';
import './App.css';
import Episode from './Episodes/episode';

function overzicht(){
  return (
    <div className = "listOverview">
      <h1>De overzichtspagina</h1>
      <Episode name="Mystery Hunters" airtime='09:00' summary='Araya takes to the air in search of an angry goddess said to live in an active volcano in Hawaii. Christina travels to England to investigate screaming skulls. Doubting Dave makes his own mini volcano and lava.' showName='Gigantosaurus' showType='Animation'/>
    </div>
  )
}

export default overzicht;
