import Styles from "./styles.module.css";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import Logo from "../../assets/Logo/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={Styles.footer} id="footer">
      <div className={Styles.footer_container}>
        <img src={Logo} alt="Logo Daniela Polido" />
        <div className={Styles.footer_text_items}>
          <p>&copy; {new Date().getFullYear()}. Todos os direitos reservados</p>
          <a href="mailto:contato@advdanielapolido.com">
            Email: contato@advdanielapolido.com
          </a>
        </div>

        <div className={Styles.social_medias}>
          <Link
            to="https://www.instagram.com/adv.danielapolido/"
            target="_blank"
          >
            <span className="instagram">
              <FaInstagram />
            </span>
          </Link>
          <Link
            to="https://www.facebook.com/profile.php?id=61556139986938"
            target="_blank"
          >
            <span className="facebook">
              <IoLogoFacebook />
            </span>
          </Link>
          <Link
            to="https://www.linkedin.com/in/daniela-polido-7773b1a3/"
            target="_blank"
          >
            <span className="Linkedin">
              <IoLogoLinkedin />
            </span>
          </Link>
          <Link
            to="https://www.youtube.com/@DireitodoTrabalhoemPortugal"
            target="_blank"
          >
            <span className="YouTube">
              <IoLogoYoutube />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
