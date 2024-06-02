import "./card.css"

function Card(props){
    return(
        <div className="card">
            <div className="img">
                <img src={props.cardImg} alt="images in card"></img></div>
                <div className="content">
                    <h2>{props.title}</h2>
                    <p>{props.content}
                    </p>
                </div>
        </div>
    )
}
export default Card