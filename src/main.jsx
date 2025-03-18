import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import About from "./pages/About/index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Welcome />
      <About />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/franchising" element={<Franchising />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/localization" element={<Localization />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} /> */}
        {/* Adicionando uma rota catch-all para redirecionar para a página Home ou uma página de erro */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
