import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import About from "./pages/About/index";
import Mission from "./pages/Mission";
import Footer from "./pages/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Welcome />
      <About />
      <Mission />
      <Footer />
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
