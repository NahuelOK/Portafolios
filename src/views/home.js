import Banner from "../components/Banner-Inicio/Banner-Inicio.js"
import Señalizadores from "../components/Señalizadores/Señalizadores.js"
import Descripcion from "../components/Descripcion/Descripcion.js"
import Tecnologias from "../components/Tecnologias/Tecnologias.js"
import Mockups from "../components/Mockups/Mockups.js"
import Proyectos from "../components/Proyectos/Proyectos.js"
function Home(){
    return(
        <div>
            <Banner/>
            <Señalizadores texto={"Descripción"}/>
            <Descripcion/>
            <Señalizadores texto={"Tecnologías"}/>
            <Tecnologias/>
            <Señalizadores texto={"MockUPs"}/>
            <Mockups/>
            <Señalizadores texto={"Proyectos"}/>
            <Proyectos/>
        </div>
    )
}

export default Home