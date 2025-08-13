import Styles from "./styles.module.css";
import about from "../../../../assets/Ebooks/ebook_2/About/e-book.png";

const About = () => {
  return (
    <div className={Styles.container_about} id="container_about">
      <div className={Styles.image_about}>
        <img src={about} alt="Sobre Advogada Daniela Polido" />
      </div>
      <div className={Styles.about}>
        <h1>Sobre o E-book</h1>
        <h5>
          Com linguagem clara e acessível, o material apresenta os principais
          direitos do trabalhador em Portugal, ajudando você a entender o seu
          contrato, evitar abusos e atuar com mais segurança e consciência dos
          seus deveres e garantias legais.
        </h5>
      </div>
    </div>
  );
};

export default About;
