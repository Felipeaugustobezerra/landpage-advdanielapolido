import "./index.css";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import Logo from "../../assets/Logo/Logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src={Logo} alt="Logo Daniela Polido" />
        <p className="footer-text">© 2025. Todos os direitos reservados</p>
        <div className="social-medias">
          <span className="instagram">
            <FaInstagram />
          </span>
          <span className="facebook">
            <IoLogoFacebook />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
