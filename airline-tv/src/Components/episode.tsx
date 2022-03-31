import '../SCSS/episode.scss'
import { useModal } from "react-hooks-use-modal";
import DetailPage from './detailEpisode'


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

{/* <Link to={`/episodes/${props.id}`} key={props.id}>Details</Link> */}

// const [Modal, open, close, isOpen] = useModal('root', {
    //   preventScroll: true,
    //   closeOnOverlayClick: false
    // });
    // return (
    //   <div>
    //     <p>Modal is Open? {isOpen ? 'Yes' : 'No'}</p>
    //     <button onClick={open}>OPEN</button>
    //     <Modal>
    //       <div>
    //         <h1>Title</h1>
    //         <p>This is a customizable modal.</p>
    //         <button onClick={close}>CLOSE</button>
    //       </div>
    //     </Modal>
    //   </div>
    // );