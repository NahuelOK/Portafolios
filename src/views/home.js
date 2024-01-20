import Banner from "../components/Banner-Inicio/Banner-Inicio.js"
import Señalizadores from "../components/Señalizadores/Señalizadores.js"
import Descripcion from "../components/Descripcion/Descripcion.js"
import Tecnologias from "../components/Tecnologias/Tecnologias.js"
function Home(){
    return(
        <div>
            <Banner/>
            <Señalizadores texto={"Descripción"}/>
            <Descripcion/>
            <Señalizadores texto={"Tecnologías"}/>
            <Tecnologias/>
            <Señalizadores texto={"MockUPs"}/>
        </div>
    )
}

export default Home