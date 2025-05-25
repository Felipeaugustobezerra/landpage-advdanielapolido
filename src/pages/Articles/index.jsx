import Styles from "./styles.module.css";
import { Link } from "react-router-dom";
import article1 from "../../assets/Articles/MI.png";
import article2 from "../../assets/Articles/Direitos_trabalhista.png";
import article3 from "../../assets/Articles/Saude_segurança.png";

const Articles = () => {
  return (
    <div className={Styles.container_articles} id="container_articles">
      <h1>Artigos</h1>
      <div className={Styles.subtitles}>
        <h3>Fique por dentro das últimas novidades do mundo jurídico</h3>
        <h4>
          Acompanhe meus artigos e conteúdos exclusivos para se manter sempre
          informado!
        </h4>
      </div>
      <div className={Styles.articles}>
        <div className={Styles.articles_items}>
          <Link to="https://direitocomparado.com/beneficios-trabalhistas-para-microempresas-em-portugal-o-que-voce-precisa-saber/">
            <img src={article1} alt="" />
            <div className={Styles.articles_items_text}>
              <h2>Micro Empresário: o que você deve saber</h2>
            </div>
          </Link>
        </div>

        <div className={Styles.articles_items}>
          <Link to="https://direitocomparado.com/os-direitos-trabalhistas-das-vitimas-de-violencia-domestica-em-portugal/">
            <img src={article2} alt="" />
            <div className={Styles.articles_items_text}>
              <h2>
                Os Direitos Trabalhistas das Vítimas de Violência Doméstica em
                Portugal
              </h2>
            </div>
          </Link>
        </div>

        <div className={Styles.articles_items}>
          <Link to="https://direitocomparado.com/saude-e-seguranca-do-trabalhador-em-portugal/">
            <img src={article3} alt="" />
            <div className={Styles.articles_items_text}>
              <h2>Saúde e Segurança do Trabalhador em Portugal</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Articles;

// .container-articles::after {
//   content: "";
//   position: absolute;
//   bottom: 30%;
//   left: -20%;
//   width: 100%; /* ajuste conforme o tamanho da forma */
//   height: 100%;
//   background-image: url("../../assets/Forms/formas_bordô.png");
//   background-repeat: repeat-y;
//   background-size: auto 90%;
//   z-index: 1;
// }
