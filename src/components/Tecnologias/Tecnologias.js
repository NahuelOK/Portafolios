import htmlCard from "./imgs/html.png"
import cssCard from "./imgs/css.png"
import jsCard from "./imgs/js.png"
import reactCard from "./imgs/imgReact.png"
import figmaCard from "./imgs/figma.png"
import mongoCard from "./imgs/mongo.png"
import bytCard from "./imgs/bosytail.png"
import sassCard from "./imgs/sass.png"
import nodeCard from "./imgs/node.png"
import Card from "../Card/Card.js"

function Tecnologias(){
    return(
     <div className="content">
        <div className="tecnologias">
            <Card title={"HTML"} img={htmlCard}/>
            <Card title={"CSS"} img={cssCard}/>
            <Card title={"JS"} img={jsCard}/>
            <Card title={"REACT JS"} img={reactCard}/>
            <Card title={"FIGMA"} img={figmaCard}/>
            <Card title={"MONGO"} img={mongoCard}/>
            <Card title={"LIBRERIAS"} img={bytCard}/>
            <Card title={"NODE JS"} img={nodeCard}/>
            <Card title={"SASS"} img={sassCard}/>
        </div>
    </div>
    );
  }
  
  export default Tecnologias;