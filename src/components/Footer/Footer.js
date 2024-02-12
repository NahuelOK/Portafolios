import { Link } from "react-router-dom" 
import insta from "./icons/insta-icon.png"
import github from "./icons/github-icon.png"
import linkedin from "./icons/linkedin-icon.png"
import pdf from "./icons/pdf-icon.png"

function Footer(){
    return(
        <div className="footer">
            <h3>Información De Contacto</h3>
          <div className="footer-banner">
               <a target="_blank" href="https://www.instagram.com/nahuemmoreno_/"><img src={insta}></img></a>
               <a target="_blank" href="https://www.linkedin.com/in/nahuel-jes%C3%BAs-moreno-mezzadra-719858262/"><img src={linkedin}></img></a>
               <a target="_blank" href="https://github.com/NahuelOK"><img src={github}></img></a>
               <Link to="/pdf" target="_blank"><img className="pdf" src={pdf} alt="PDF" /></Link>
          </div>
        </div>
    )
}

export default Footer