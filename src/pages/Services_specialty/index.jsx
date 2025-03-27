import "./index.css";
import Service1 from "../../assets/Services_/Service_1.png";
import Service2 from "../../assets/Services_/Service_2.png";
import Service3 from "../../assets/Services_/Service_3.png";

const Services_specialty = () => {
  return (
    <div className="container-services">
      <h1 className="title-services">Serviços e Especialidades</h1>
      <div className="list-services">
        <div className="images-service">
          <img src={Service1} alt="Consultoria Padrão" />
        </div>

        <div className="text-service">
          <h3>Consultoria Padrão Pessoa Física/Singular</h3>
          <p>
            Esta consultoria é destinada a pessoas que necessitam de uma análise
            aprofundada da sua situação e que desejam acionar órgãos
            administrativos ou judiciais diante de possíveis irregularidades.
            Para uma avaliação precisa, será necessário o agendamento de uma
            consultoria, ocasião em que serão analisados os documentos
            pertinentes e a melhor estratégia para a solução do seu problema.
          </p>
        </div>
      </div>
      <div className="list-services">
        <div className="images-service">
          <img src={Service2} alt="Consultoria Padrão" />
        </div>
        <div className="text-service">
          <h3>Consultoria para Empreendedores</h3>
          <p>
            A Consultoria para Empreendedores é destinada a quem deseja
            empreender ou já possui um negócio em Portugal e precisa de suporte
            jurídico na área trabalhista. Essa consultoria oferece orientações
            essenciais para a regularização e gestão das relações de trabalho,
            mas não substitui a contratação de um contabilista para questões
            tributárias ou procedimentos de regularização junto aos órgãos
            públicos. A elaboração de documentos e a realização de diligências
            não estão inclusas, sendo contratadas separadamente conforme
            necessidade e acordo entre as partes.
          </p>
        </div>
      </div>
      <div className="list-services">
        <div className="images-service">
          <img src={Service3} alt="Consultoria Padrão" />
        </div>
        <div className="text-service">
          <h3> Regularização de Imigrantes e Nacionalidade Portuguesa</h3>
          <p>
            Serviço destinado a pessoas que precisam regularizar sua residência
            em território portugues, bem como, solicitação de pedidos de
            nacionalidade portuguesa.
          </p>
        </div>
      </div>
      <div className="list-services">
        <div className="images-service">
          <img src={Service2} alt="Consultoria Padrão" />
        </div>
        <div className="text-service">
          <h3> Certificação de cópias e Reconhecimento de assinaturas</h3>
          <p>
            Em Portugal, os advogados estão legalmente habilitados a reconhecer
            assinaturas e certificar cópias de documentos, garantindo a sua
            autenticidade e validade jurídica. Prestamos este serviço com rigor
            e rapidez, assegurando conformidade com a legislação vigente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services_specialty;
