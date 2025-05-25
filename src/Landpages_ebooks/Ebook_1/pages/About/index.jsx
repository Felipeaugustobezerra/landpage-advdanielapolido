import Styles from "./styles.module.css";
import about from "../../../../assets/Ebooks/ebook_1/About/Ebook.png";

const About = () => {
  return (
    <div className={Styles.container_about} id="container_about">
      <div className={Styles.image_about}>
        <img src={about} alt="Sobre Advogada Daniela Polido" />
      </div>
      <div className={Styles.about}>
        <h1>Sobre o E-book</h1>
        <h5>
          Com linguagem simples e objetiva, o material apresenta as principais
          regras do Direito do Trabalho português, ajudando você a contratar e
          gerir colaboradores com mais segurança jurídica e menos riscos legais.
        </h5>
      </div>
    </div>
  );
};

export default About;
