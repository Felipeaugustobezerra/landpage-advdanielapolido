import "./Navbar.css";
import Logo from "../../assets/Logo/Logo.png";
import Drawer from "../Drawer/Drawer";

const Navbar = () => {
  const handleScroll = (className) => {
    const section = document.querySelector(`.${className}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container-navbar">
      <div className="logo-img">
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <div className="nav-links">
        <span onClick={() => handleScroll("container-welcome")}>Início</span>
        <span onClick={() => handleScroll("container-about")}>Sobre</span>
        <span onClick={() => handleScroll("container-mission")}>
          Serviços e Especialidades
        </span>
        <span onClick={() => handleScroll("artigos")}>Artigos</span>
        <span onClick={() => handleScroll("ebooks")}>E-books</span>
        <span onClick={() => handleScroll("contact")}>Contato</span>
      </div>
      <div className="dropdown_menu">
        <Drawer />
      </div>
    </div>
  );
};

export default Navbar;
