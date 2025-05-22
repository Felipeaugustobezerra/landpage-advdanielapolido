import "./index.css";
import { Link } from "react-router-dom";
import ebook1 from "../../assets/Ebooks/E-BOOK.png";

const Ebooks = () => {
  return (
    <div className="container-ebooks">
      <h1>E-books</h1>
      <div className="ebooks-items">
        <Link to="https://direitocomparado.com/saude-e-seguranca-do-trabalhador-em-portugal/">
          <img src={ebook1} alt="" />
          <div className="ebooks-items-text">
            <h2>Saúde e segurança do trabalhador em Portugal</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Ebooks;
