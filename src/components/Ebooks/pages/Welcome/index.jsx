import "./index.css";
import Navbar from "../../components/Navbar/Navbar";
import cover from "../../../../assets/Ebooks/ebook_1/welcome/DRADANIELA.png"; // Substitua pelo caminho correto da sua imagem
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div className="container-welcome">
      <Navbar />
      <div className="welcome">
        <div className="image-welcome">
          <img src={cover} alt="Advogada trabalhista Daniela Polido" />
        </div>
        <div className="text-welcome">
          <div className="text">
            <h1>
              Entenda as regras do trabalho em Portugal antes de contratar!
            </h1>
            <p>
              Se você é um empreendedor e quer iniciar ou expandir um negócio em
              Portugal<b>,este eBook é para você.</b>
            </p>
            <button className="button-welcome">
              <Link
                to="https://api.whatsapp.com/send/?phone=351912758571&text&type=phone_number&app_absent=0"
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
