import './SCSS/App.scss';
import Data from './Hooks/episodeData.hooks';
import Header from './Components/Header';

function App(){
  return(
    <div>
      <Header/>
      <div className = "listOverview">
        <Data/>
      </div>
    </div>
    
  )
  
}

export default App;
