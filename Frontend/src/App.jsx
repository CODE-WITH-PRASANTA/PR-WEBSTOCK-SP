import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import Home from "./Pages/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Floatingform from "./Component/Floatingform/Floatingform";

// App.js
function App() {
  return (
    <BrowserRouter>
      {/* Navbar stays at the top */}
      <Navbar />

      <main className="main-content">
        <Routes>
          {/* Home contains all the sections with IDs */}
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      {/* Floating form remains persistent */}
      <Floatingform />
    </BrowserRouter>
  );
}
export default App;