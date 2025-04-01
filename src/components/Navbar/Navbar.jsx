import { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleScroll = (className) => {
    const section = document.querySelector(`.${className}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setDrawerOpen(false); // fecha o drawer ao clicar no link
    }
  };

  return (
    <div className="container-navbar">
      <div className="logo-img">
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
      </div>

      {/* Ícone do menu para mobile */}
      <div className="menu-icon" onClick={() => setDrawerOpen(!drawerOpen)}>
        {drawerOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`nav-links ${drawerOpen ? "open" : ""}`}>
        <span onClick={() => handleScroll("container-welcome")}>Início</span>
        <span onClick={() => handleScroll("container-about")}>Sobre</span>
        <span onClick={() => handleScroll("container-mission")}>
          Serviços e Especialidades
        </span>
        <span onClick={() => handleScroll("container-articles")}>Artigos</span>
        <span onClick={() => handleScroll("ebooks")}>E-books</span>
        <span onClick={() => handleScroll("contact")}>Contato</span>
      </div>
    </div>
  );
};

export default Navbar;
