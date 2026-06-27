import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Floatingform from "./Component/Floatingform/Floatingform";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
        <Floatingform />
    </BrowserRouter>
  );
}

export default App;