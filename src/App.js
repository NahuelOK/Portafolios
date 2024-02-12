import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './views/home.js';
import PDF from "./views/pdf.js";
import "./App.scss"

function App(){
  return(
    <div>
      <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/pdf" element={<PDF/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
