import '../SCSS/detailEpisode.scss';

function DetailPage(props:any){
    
    return(
        <div>
            <h1>{props.name}</h1>
            <p>Season: {props.season}</p>
            <p>Episode: {props.number}</p>
            <p>Duration: {props.runtime} min.</p>
            <p>Summary: {props.summary}
            </p>
        </div>
    )
}

export default DetailPage