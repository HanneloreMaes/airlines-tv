import '../SCSS/detailEpisode.scss';

function DetailPage(props:any){
    
    return(
        <div className='containerDetail'>
            <img src={props.image} alt="show-poster" />
            <div className="containerInfoDetail">
                <h1>{props.name}</h1>
                <p className="season">S{props.season}- E{props.number}</p>
                <p className="duration">Duration: {props.runtime} min.</p>
                <p>Channel: {props.networkName}</p>
                <p className="show">Show: {props.showsName}</p>
                <p>{props.summary?
                    <p>Summary: {props.summary.replace(/<\/?[^>]+(>|$)/g, '')}</p>:
                    <p>Summary is not found</p> 
                }
                </p>
                <p>
                    {props.rating?
                            <p>{props.rating}/5</p>:
                            <p>Not rated yet</p>
                    }
                </p>
            </div>
        </div>
    )
}

export default DetailPage