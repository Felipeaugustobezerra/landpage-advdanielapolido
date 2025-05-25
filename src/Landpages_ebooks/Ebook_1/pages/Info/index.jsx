import Styles from "./styles.module.css";

const Info = () => {
  return (
    <div className={Styles.container_info} id="container_info">
      <div className={Styles.info1}>
        <h2>
          Tudo explicado de forma acessível, mesmo para quem não tem formação
          jurídica, mas precisa entender o básico para tomar decisões
          conscientes no dia a dia da empresa.
        </h2>
      </div>
      <div className={Styles.info2}>
        <h2>
          Atenção: Este material é informativo e não substitui uma consultoria
          jurídica personalizada.
        </h2>
      </div>
    </div>
  );
};

export default Info;
