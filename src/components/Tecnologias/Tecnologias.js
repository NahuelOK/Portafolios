import htmlCard from "./imgs/html.png"
import cssCard from "./imgs/css.png"
import jsCard from "./imgs/js.png"
import reactCard from "./imgs/imgReact.png"
import figmaCard from "./imgs/figma.png"
import mongoCard from "./imgs/mongo.png"
import bytCard from "./imgs/bosytail.png"
import sassCard from "./imgs/sass.png"
import nodeCard from "./imgs/node.png"

function Tecnologias(){
    return(
     <div className="content">
         <div className="tecnologias">
            <div className="html-card">
                <h3>HTML</h3>
                <img src={htmlCard} alt="html card"></img>
            </div>
            <div className="html-card">
                <h3>CSS</h3>
                <img src={cssCard} alt="css card"></img>
            </div>
            <div className="html-card">
                <h3>JS</h3>
                <img src={jsCard} alt="js card"></img>
            </div>
            <div className="html-card">
                <h3>REACT JS</h3>
                <img src={reactCard} alt="react card"></img>
            </div>
            <div className="html-card">
                <h3>MONGO DB</h3>
                <img src={mongoCard} alt="mongo card"></img>
            </div>
      </div>
       <div className="complementos">
            <div className="html-card">
                <h3>LIBRERIAS</h3>
                <img src={bytCard} alt="byt card"></img>
            </div>
            <div className="html-card">
                <h3>SASS</h3>
                <img src={sassCard} alt="sass card"></img>
            </div>
            <div className="html-card">
                <h3>NODE JS</h3>
                <img src={nodeCard} alt="node card"></img>
            </div>
            <div className="html-card">
                <h3>FIGMA</h3>
                <img src={figmaCard} alt="figma card"></img>
            </div>
        </div>
    </div>
    );
  }
  
  export default Tecnologias;