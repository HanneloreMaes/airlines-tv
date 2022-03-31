import '../SCSS/detailEpisode.scss';

function DetailPage(props:any){
    
    return(
        <div className='containerDetail'>
            <img src={props.image} alt="show-poster" />
            <div className="containerInfoDetail">
                <h1>{props.name}</h1>
                <p>Channel: {props.networkName}</p>
                <p>Channel: {props.showsName}</p>
                <p>Season: {props.season}</p>
                <p>Episode: {props.number}</p>
                <p>Duration: {props.runtime} min.</p>
                <p>Summary: {props.summary}</p>
            </div>
        </div>
    )
}

export default DetailPage