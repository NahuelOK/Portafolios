import { Component } from "react";

class pdf extends Component {
    render() {
        return(
        <div className="ver-pdf">
            <object
            data={require("../docs/cvN.pdf")}
            type="application/pdf"
            width="100%"
            height="100%"
            >
            </object>
        </div>
        );
    }
}

export default pdf