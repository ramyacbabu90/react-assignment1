function Place(props){
       
    return(
       
        <div class="card">
        <img src={"https://source.unsplash.com/1600x1000/?"+props.img} alt="Card Image"/>
        <div class="description">
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <div className={props.ratings>4.4 ? "best" : "d-none"}>Best Place</div>
        </div>
        </div>
    )
}
export default Place;