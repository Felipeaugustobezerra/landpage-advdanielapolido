import Styles from "./styles.module.css";
import Navbar from "../../components/Navbar/Navbar";
import cover from "../../assets/Fotos/Cover.png";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div id="container-welcome" className={Styles.container_welcome}>
      <Navbar />
      <div className={Styles.welcome}>
        <div className={Styles.image_welcome}>
          <img src={cover} alt="Advogada trabalhista Daniela Polido" />
        </div>
        <div className={Styles.text_welcome}>
          <div className={Styles.text}>
            <h1>Dra. Daniela Polido</h1>
            <p>Advogada</p>
            <button className={Styles.button_welcome}>
              <Link
                to="https://api.whatsapp.com/send/?phone=351912758571&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                Entre em Contato
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
