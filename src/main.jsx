import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CookiesProvider } from "react-cookie"; // ✅ Importação adicionada
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import Welcome from "./pages/Welcome";
import About from "./pages/About/index";
import Mission from "./pages/Mission";
import Footer from "./pages/Footer";
import Services_specialty from "./pages/Services_specialty";
import Articles from "./pages/Articles";
import CookieConsent from "./components/Cookies/Cookies";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CookiesProvider>
      {/* Adicionando o CookieConsent aqui */}
      <CookieConsent />
      <BrowserRouter>
        <Welcome />
        <About />
        <Mission />
        <Services_specialty />
        <Articles />
        <Footer />
      </BrowserRouter>
    </CookiesProvider>
  </StrictMode>
);
