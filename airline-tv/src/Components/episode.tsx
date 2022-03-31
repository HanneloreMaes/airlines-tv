import '../SCSS/episode.scss'
import { useModal } from "react-hooks-use-modal";
import DetailPage from './detailEpisode'
import App from '../App';
import { render } from 'react-dom';


const EpisodeInfo = (props : any) => {
    const [Modal, open, close] = useModal('root', {
      preventScroll: true,
      closeOnOverlayClick: true
    });
    return(
        <div className="episodeList" id={props.id}>
            <div className="centerContainer">
                <p className="airTime">{props.airtime}</p>
                <h2>{props.name}</h2>
                <div className="showNameType">
                    <p className="showName">{props.showName}</p>
                    <p className="showName">-</p>
                    <p className="showName typeSmall">{props.showType}</p>
                </div>
            </div>
            <button className="btn-1" onClick={open}> Details
                <Modal>
                    <div>
                        <DetailPage id={props.id} name={props.name} season={props.season} number={props.number} runtime={props.runtime} summary={props.summary}/>
                        <button onClick={close}>CLOSE</button>
                    </div>
                </Modal>       
            </button>
        </div>
    )
}
export default EpisodeInfo;