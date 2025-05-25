import Styles from "./styles.module.css";

const Content = () => {
  return (
    <div className={Styles.container_content} id="container_content">
      <h1>O que você vai encontrar:</h1>

      <div className={Styles.container_text}>
        <div className={Styles.text_content}>
          <ul className={Styles.list_content}>
            <li>Tipos de Contratos Permitidos por Lei</li>
            <li>Jornada de Trabalho e Descanso</li>
            <li>Remuneração Minima e Férias</li>
            <li>Direitos e Deveres do Empregador</li>
            <li>Segurança Social</li>
            <li>Encerramento do Contrato e Muito Mais</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content;
