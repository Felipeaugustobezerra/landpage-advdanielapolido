import Styles from "./styles.module.css";

const Mission = () => {
  return (
    <div className={Styles.container_mission}>
      <h1>Áreas de Atuação e Serviços</h1>
      <h3>
        Seja no Brasil ou em Portugal, assessoria e consultoria jurídica
        personalizada para atender às suas necessidades com profissionalismo e
        compromisso, com atendimentos presenciais ou online.
      </h3>
      <div className={Styles.container_text}>
        <div className={Styles.text_mission}>
          <h4 className={Styles.country_work}>Atuação no Brasil:</h4>
          <p>
            Com vasta experiência no Direito Civil, de Família e Trabalhista,
            atendimento para pessoas físicas e jurídicas, com foco especial em
            micro e pequenas empresas, orientação estratégica e defesa dos seus
            direitos em questões como:
          </p>
          <ul>
            <li>
              Direito Civil: contratos, responsabilidade civil, cobranças e
              litígios.
            </li>
            <li>
              Direito de Família: divórcios, guarda, pensão alimentícia e
              inventários.
            </li>
            <li>
              Direito Trabalhista: defesa e orientação para empregados e
              empregadores, rescisões contratuais e direitos trabalhistas.
            </li>
          </ul>
        </div>

        <div className={Styles.text_mission}>
          <h4 className={Styles.country_work}>Atuação em Portugal:</h4>
          <p>
            Em território português, auxílio na obtenção da nacionalidade e na
            regularização de imigrantes, além de oferecer suporte jurídico
            especializado:
          </p>
          <ul>
            <li>
              Direito Laboral: elaboração e revisão de contratos, defesa de
              direitos, rescisões e assessoria preventiva para empresas.
            </li>
            <li>
              Nacionalidade e Regularização: orientação e acompanhamento nos
              processos de cidadania e vistos.
            </li>
            <li>
              Reconhecimento de Assinatura e Certificação de Fotocópias:
              serviços conforme a legislação portuguesa.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mission;
