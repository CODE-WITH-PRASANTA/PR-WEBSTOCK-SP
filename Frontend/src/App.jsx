import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD

import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Introducing from "./Component/Introducing/Introducing";
=======
import Home from "./Pages/Home/Home";

>>>>>>> a48fe3b06cc1d13dfd9465a2f793ed433b8b4117

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Navbar />

      <Routes>
        <Route path="/" element={<Introducing />} />

        
      </Routes>

      <Footer />
=======
      <Routes>
       
        <Route path="/" element={<Home />} />
      </Routes>
>>>>>>> a48fe3b06cc1d13dfd9465a2f793ed433b8b4117
    </BrowserRouter>
  );
}

export default App;