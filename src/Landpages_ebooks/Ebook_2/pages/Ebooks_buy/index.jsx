import Styles from "./styles.module.css";
import { Link } from "react-router-dom";
import image from "../../../../assets/Ebooks/ebook_2/welcome/Dra_DanielaPolido2.png";

const Ebooks = () => {
  return (
    <div className={Styles.container_ebooks} id="container_ebooks_buy">
      <div className={Styles.imagem}>
        <img src={image} alt="Thumbnail do vídeo" />
      </div>
      <div className={Styles.ebooks_items}>
        <div className={Styles.ebooks_items_text}>
          <h2>
            Tenha mais clareza, confiança e proteção para
            <h1>trabalhar em Portugal com dignidade e dentro da lei!</h1>
          </h2>
          <Link
            to="https://hotmart.com/pt-br/marketplace/produtos/guia-do-trabalhador/A101281779E"
            target="_blank"
            className={Styles.button_ebooks}
          >
            Compre agora!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ebooks;
