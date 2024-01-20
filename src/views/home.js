import Banner from "../components/Banner-Inicio/Banner-Inicio.js"
import Señalizadores from "../components/Señalizadores/Señalizadores.js"
import Descripcion from "../components/Descripcion/Descripcion.js"
function Home(){
    return(
        <div>
            <Banner/>
            <Señalizadores texto={"Descripción"}/>
            <Descripcion/>
            <Señalizadores texto={"Tecnologías"}/>
        </div>
    )
}

export default Home