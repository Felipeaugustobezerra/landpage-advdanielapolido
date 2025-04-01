import "./index.css";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import Logo from "../../assets/Logo/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src={Logo} alt="Logo Daniela Polido" />
        <p className="footer-text">© 2025. Todos os direitos reservados</p>
        <div className="social-medias">
          <Link
            to="https://www.instagram.com/adv.danielapolido/"
            target="_blank"
          >
            <span className="instagram">
              <FaInstagram />
            </span>
          </Link>
          <Link
            to="https://www.instagram.com/adv.danielapolido/"
            target="_blank"
          >
            <span className="facebook">
              <IoLogoFacebook />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
