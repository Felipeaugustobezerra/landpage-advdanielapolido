import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo/Logo.png";
import Drawer from "../Drawer/Drawer";

const Navbar = () => {
  return (
    <div className="container-navbar">
      <div className="logo-img">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/services">Serviços e Especialidades</Link>
        <Link to="/artigos">Artigos</Link>
        <Link to="/books">E-books</Link>
        <Link to="/contact">Contato</Link>
      </div>
      <div className="dropdown_menu">
        <Drawer />
      </div>
    </div>
  );
};

export default Navbar;
