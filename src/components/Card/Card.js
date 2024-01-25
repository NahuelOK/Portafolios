
function Card ({img, title}){
    return(
        <div>
            <div className="card">
                <h3>{title}</h3>
                <img src={img} alt={`${title} card`} />
            </div>
        </div>
    )
}

export default Card