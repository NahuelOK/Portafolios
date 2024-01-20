import FotoPerfil from "./imgs/fotoportafolio.jpeg"
import BanderaArg from "./imgs/Argentina(AR).png"

function Banner(){
    return(
        <div className="banner">
            <div className="foto-perfil">
                <img src ={FotoPerfil} alt="Foto de perfil"></img>
            </div>
            <div className="titulos">
                <h1 className="titulos-primarios">¡HOLA!</h1>
                <div>
                    <h2 className="titulos-secundarios">Soy Nahuel Moreno</h2>
                    <h2 className="titulos-terciarios">Front-End Developer</h2>
                </div>
            </div>
            <img className="bandera" src={BanderaArg} alt="Bandera de arg"></img>
        </div>
    )
}

export default Banner