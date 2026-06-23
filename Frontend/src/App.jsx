import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Introducing from "./Component/Introducing/Introducing";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Introducing />} />

        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;