import Styles from "./styles.module.css";

const Content = () => {
  return (
    <div className={Styles.container_content} id="container_content">
      <h1>O que você vai encontrar:</h1>

      <div className={Styles.container_text}>
        <div className={Styles.text_content}>
          <ul className={Styles.list_content}>
            <li>Contratos de Trabalho Explicados</li>
            <li>Jornada de Trabalho e Descanso</li>
            <li>Salário Mínimo, Férias e Subsídios</li>
            <li>Deveres do Empregador e seus Direitos</li>
            <li>Segurança Social</li>
            <li>Fim do Contrato e Como se Proteger</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content;
