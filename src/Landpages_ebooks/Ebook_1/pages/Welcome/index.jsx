import Styles from "./styles.module.css";
import Navbar from "../../components/Navbar/Navbar";
import cover from "../../../../assets/Fotos/Cover.png"; // Substitua pelo caminho correto da sua imagem
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
              Entenda as regras do trabalho em Portugal antes de contratar!
            </h1>
            <p>
              Se você é um empreendedor e quer iniciar ou expandir um negócio em
              Portugal<b>, este eBook é para você.</b>
            </p>
            <button className={Styles.button_welcome}>
              <Link
                to="https://hotmart.com/pt-br/marketplace/produtos/guia-para-empreendedores-estrangeiros-em-portugal/K99712737F"
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
