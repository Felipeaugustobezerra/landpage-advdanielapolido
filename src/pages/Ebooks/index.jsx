import Styles from "./styles.module.css";
import { Link } from "react-router-dom";
import ebook1 from "../../assets/Ebooks/E-BOOK.png";

const Ebooks = () => {
  return (
    <div className={Styles.container_ebooks} id="container_ebooks">
      <h1>E-books</h1>
      <div className={Styles.ebooks_items}>
        <Link
          to="/Guia_para_empreendedores"
          className={Styles.ebooks_items_link}
        >
          <img src={ebook1} alt="" />
          <div className={Styles.ebooks_items_text}>
            <h2>Guia para Empreendedores Estrangeiros em Portugal</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Ebooks;
