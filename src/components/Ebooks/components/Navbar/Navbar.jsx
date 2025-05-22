import { useState } from "react";
import "./navbar.css";
import Logo from "../../../../assets/Logo/logo.png"; // Substitua pelo caminho correto da sua imagem
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
        <span onClick={() => handleScroll("container-welcome")}>Home</span>
        <span onClick={() => handleScroll("container-about")}>Sobre</span>
        <span onClick={() => handleScroll("container-mission")}>Conteúdo</span>
        <span onClick={() => handleScroll("container-articles")}>Compre</span>
      </div>
    </div>
  );
};

export default Navbar;
