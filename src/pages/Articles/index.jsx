import "./index.css";
import { Link } from "react-router-dom";
import article1 from "../../assets/Articles/MI.png";
import article2 from "../../assets/Articles/Direitos_trabalhista.png";
import article3 from "../../assets/Articles/Saude_segurança.png";

const Articles = () => {
  return (
    <div className="container-articles">
      <h1>Artigos</h1>
      <div className="subtitles">
        <h3>Fique por dentro das últimas novidades do mundo jurídico</h3>
        <h4>
          Acompanhe meus artigos e conteúdos exclusivos para se manter sempre
          informado!
        </h4>
      </div>
      <div className="articles">
        <div className="articles-items">
          <Link to="https://direitocomparado.com/beneficios-trabalhistas-para-microempresas-em-portugal-o-que-voce-precisa-saber/">
            <img src={article1} alt="" />
            <div className="articles-items-text">
              <h2>MI:o que você deve saber</h2>
            </div>
          </Link>
        </div>
        <div className="articles-items">
          <Link to="https://direitocomparado.com/os-direitos-trabalhistas-das-vitimas-de-violencia-domestica-em-portugal/">
            <img src={article2} alt="" />
            <div className="articles-items-text">
              <h2>
                Os direitos trabalhistas das vítimas de violência doméstica
              </h2>
            </div>
          </Link>
        </div>

        <div className="articles-items">
          <Link to="https://direitocomparado.com/saude-e-seguranca-do-trabalhador-em-portugal/">
            <img src={article3} alt="" />
            <div className="articles-items-text">
              <h2>Saúde e segurança do trabalhador em Portugal</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Articles;
