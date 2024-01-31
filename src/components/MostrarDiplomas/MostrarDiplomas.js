import Diplomas from "../Diplomas/Diplomas.js"
import Diplo1 from "./imgs/diplo-1.png"
import Diplo2 from "./imgs/diplo-2.png"
import Diplo3 from "./imgs/diplo3.png"

function MostrarDiplomas(){
    return(
        <div className="mostrar-diplomas">
           <Diplomas img={Diplo1}/>
           <Diplomas img={Diplo2}/>
           <Diplomas img={Diplo3}/>
        </div>
    )
}

export default MostrarDiplomas