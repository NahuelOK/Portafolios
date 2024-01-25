import mockup1 from "./imgs/mockup-1.png"
import mockup2 from "./imgs/mockup-2.png"
import mockup3 from "./imgs/mockup-3.png"

function Mockups (){
    return(
        <div className="mockups">
            <div className="imgs-atras">
                <img src={mockup1} alt="img1"></img>
                <img src={mockup2} alt="img2"></img>
            </div>
            <div className="img-frente">
                <img src={mockup3} alt="img3"></img>
            </div>
        </div>
    )
}

export default Mockups