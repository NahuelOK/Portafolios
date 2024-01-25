
function ProyectosCard({img, title, description, link}){
    return(
        <div className="proyectos-card">
            <img src={img}></img>
            <div className="componentes-card">
                <h2>{title}</h2>
                <p>{description}</p>
                <button className="btn-ver-producto"><a target="_blank" href={link}>Ir a Ver Proyecto</a></button>
            </div>
        </div>
    )
}

export default ProyectosCard