import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import "./index.css";

import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Mission from "./pages/Mission";
import Footer from "./pages/Footer";
import Services_specialty from "./pages/Services_specialty";
import Articles from "./pages/Articles";
import CookieConsent from "./components/Cookies/Cookies";
import Ebooks from "./pages/Ebooks"; // ✅ Página que terá rota própria
import Landpage1 from "./Landpages_ebooks/Ebook_1/Landpage_1";
import Landpage2 from "./Landpages_ebooks/Ebook_2/Landpage_2";
import ScrollToTop from "./components/ScroolTop/ScrollToTop";
import Country from "./pages/countries_service";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <CookieConsent />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Welcome />
                <About />
                <Mission />
                <Country />
                <Services_specialty />
                <Articles />
                <Ebooks />
                <Footer />
              </>
            }
          />
          <Route path="/Guia_para_empreendedores" element={<Landpage1 />} />
          <Route path="/Guia_do_trabalhador" element={<Landpage2 />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  </StrictMode>
);
