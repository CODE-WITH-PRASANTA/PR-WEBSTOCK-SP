import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Introducing from "./Component/Introducing/Introducing";
import Home from "./Pages/Home/Home";



function App() {
  return (
    <BrowserRouter>


      <Routes>
       
        <Route path="/" element={<Home />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;