import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./components/home/Home"
import AddProduct from "./components/addProduct/AddProduct";
import SingleProduct from "./components/singleProduct/SingleProduct";
function App() {
  return (
      <div className="App">
          <Router>
              <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='/addItem' element={<AddProduct/>} />
                  <Route path='/:id' element={<SingleProduct/>} />
              </Routes>
          </Router>

      </div>


  );
}

export default App;
