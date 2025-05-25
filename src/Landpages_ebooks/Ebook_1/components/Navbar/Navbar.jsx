import { useState, useEffect, useRef } from "react";
import Styles from "./style.module.css";
import Logo from "../../../../assets/Logo/Logo.png"; // Substitua pelo caminho correto da sua imagem
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navRef = useRef(null);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setDrawerOpen(false); // Fecha menu ao clicar em um link
    }
  };

  // Fecha o menu ao clicar fora ou ao rolar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        drawerOpen &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setDrawerOpen(false);
      }
    };

    const handleScroll = () => {
      if (drawerOpen) {
        setDrawerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [drawerOpen]);

  return (
    <div className={Styles.container_navbar}>
      <div className={Styles.logo_img}>
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
      </div>

      {/* Ícone do menu para mobile */}
      <div
        className={Styles.menu_icon}
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        {drawerOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`${Styles.nav_links} ${drawerOpen ? Styles.open : ""}`}>
        <span onClick={() => handleScroll("container_welcome")}>Home</span>
        <span onClick={() => handleScroll("container_about")}>Sobre</span>
        <span onClick={() => handleScroll("container_content")}>Conteúdo</span>
        <span onClick={() => handleScroll("container_ebooks_buy")}>Compre</span>
      </div>
    </div>
  );
};

export default Navbar;
