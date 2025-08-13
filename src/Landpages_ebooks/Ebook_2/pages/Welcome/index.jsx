import Styles from "./styles.module.css";
import Navbar from "../../components/Navbar/Navbar";
import cover from "../../../../assets/Ebooks/ebook_2/welcome/Dra_DanielaPolido1.png"; // Substitua pelo caminho correto da sua imagem
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div className={Styles.container_welcome}>
      <Navbar />
      <div className={Styles.welcome} id="container_welcome">
        <div className={Styles.image_welcome}>
          <img src={cover} alt="Advogada trabalhista Daniela Polido" />
        </div>
        <div className={Styles.text_welcome}>
          <div className={Styles.text}>
            <h1>
              Antes de começar a trabalhar em Portugal, garanta o mais
              importante: informação!
            </h1>
            <p>
              Este guia é a sua primeira defesa contra abusos, ilegalidades e
              falsas promessas.
            </p>
            <button className={Styles.button_welcome}>
              <Link
                to="https://hotmart.com/pt-br/marketplace/produtos/guia-do-trabalhador/A101281779E"
                target="_blank"
              >
                Compre agora!
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
