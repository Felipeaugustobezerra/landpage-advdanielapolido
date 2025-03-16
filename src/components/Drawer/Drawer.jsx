import { useState } from "react";
import "./Drawer.css";
import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar o menu dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={toggleDropdown} className="dropdown-button">
        <IoMenuOutline />
      </button>
      <div className="dropdown_container">
        {/* Condicional para mostrar o dropdown */}
        {isOpen && (
          <ul className="dropdown-menu">
            <li>
              <Link to="/" onClick={closeDropdown}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/Franchising" onClick={closeDropdown}>
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/Gallery" onClick={closeDropdown}>
                Serviços e Especialidades
              </Link>
            </li>
            <li>
              <Link to="/Localization" onClick={closeDropdown}>
                Artigos
              </Link>
            </li>
            <li>
              <Link to="/Contact" onClick={closeDropdown}>
                E-book
              </Link>
            </li>
            <li>
              <Link to="/Contact" onClick={closeDropdown}>
                Contato
              </Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Drawer;
