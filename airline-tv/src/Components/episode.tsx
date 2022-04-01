import '../SCSS/episode.scss'
import '../SCSS/button.scss'
import DetailPage from './detailEpisode'
import { useModal } from 'react-hooks-use-modal'

const EpisodeInfo = (props : any) => {
    
    const [Modal, open, close] = useModal('root', {
      preventScroll: true,
      closeOnOverlayClick: true
    });

    return(
        <div className="episodeList" id={props.id}>
            <div className="episodeInfoContainer">
                <p className="airTime">{props.airtime}</p>
                <h2>{props.name}</h2>
                <div className="showNameType">
                    <p className="showName">{props.showName}</p>
                    <p className="showName">-</p>
                    <p className="showName typeSmall">{props.showType}</p>
                </div>
                <p>{props.summary?
                    <p> {props.summary.replace(/<\/?[^>]+(>|$)/g, '')}</p>:
                    <p>Summary is not found</p> 
                }
                </p>
            </div>
            <button className="btnPopup" onClick={open}> Details </button>
                <Modal>
                    <div className="detailPage">
                        <DetailPage showsName={props.showsName} id={props.id} name={props.name} season={props.season} number={props.number} runtime={props.runtime} summary={props.summary} image={props.image} networkName={props.networkName} rating={props.rating}/>
                        <button className="btnPopup closeBtn" onClick={close}>Back</button>
                    </div>
                </Modal>
        </div>
    )
}
export default EpisodeInfo;

