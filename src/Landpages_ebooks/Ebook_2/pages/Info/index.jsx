import Styles from "./styles.module.css";

const Info = () => {
  return (
    <div className={Styles.container_info} id="container_info">
      <div className={Styles.info}>
        <h2>
          Atenção: Este material é informativo e não substitui uma consultoria
          jurídica personalizada.
        </h2>
      </div>
    </div>
  );
};

export default Info;
