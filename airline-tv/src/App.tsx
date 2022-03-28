import React from 'react';
import { ReactDOM } from 'react';
import './App.css';
import Episode from './Episodes/episode';
import dataEpisode from './Episodes/episode-data';

function overzicht(){
  return (
    <div className = "listOverview">
      <h1>De overzichtspagina</h1>
      <Episode name="Mystery Hunters" airtime='09:00' summary='Araya takes to the air in search of an angry goddess said to live in an active volcano in Hawaii. Christina travels to England to investigate screaming skulls. Doubting Dave makes his own mini volcano and lava.' showName='Gigantosaurus' showType='Animation'/>
    </div>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default overzicht;
