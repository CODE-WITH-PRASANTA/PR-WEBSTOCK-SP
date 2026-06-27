import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import main page elements
import Home from "./Pages/Home/Home";
import Floatingform from "./Component/Floatingform/Floatingform";

// Import your structural layout components 
// (Update these paths to match your actual folder structure)


import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Floating from "./Component/Floating/Floating";

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
        <Floatingform />
=======
      {/* 1. Global Navbar: Stays at the top of every route */}
      <Navbar />

      {/* 2. Main Switchable Content Container */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* You can safely append future page routes here */}
        </Routes>
      </main>

      {/* 3. Global Floating Action Button: Appears fixed on top of layouts */}
      <Floating />

      {/* 4. Global Footer: Sits at the bottom of every route */}
      <Footer />
>>>>>>> 683fed46f78ff34b422423747a049776fd588441
    </BrowserRouter>
  );
}

export default App;