import './SCSS/App.scss';
import Data from './Hooks/episodeData.hooks';
import Header from './Components/Header';
import PlaneAnimation from './Components/animation-plane';

function App(){
  return(
    <div>
      <PlaneAnimation/>
      <Header/>
      <div className = "listOverview">
        <Data/>
      </div>
    </div>
    
  )
  
}

export default App;
