import { useState, useEffect } from "react";
import "./PrivacyPolicy.css"; // Importando o CSS

function PrivacyPolicy() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Efeito colateral para adicionar/remover a classe no body
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Limpa a classe no scroll ao desmontar o componente ou quando o modal fecha
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <div>
      <p className="privacy-button" onClick={openModal}>
        Política de Privacidade
      </p>

      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content-privacy"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Política de Privacidade</h2>

            <div className="info_cookies_privacy">
              <h3>1. Informações Gerais </h3>
              <p>
                A Presente Política de Privacidade contém informações a respeito
                do modo como tratamos, total ou parcialmente, de forma
                automatizada ou não, os dados pessoais dos usuários que acessam
                nosso site. Seu objetivo é esclarecer os interessados acerca dos
                tipos de dados que são coletados, dos motivos da coleta e da
                forma como o usuário poderá atualizar, gerenciar ou excluir
                estas informações.
              </p>
              <p>
                O presente documento foi elaborado em conformidade com a Lei
                Geral de Proteção de Dados Pessoais (Lei 13.709/18), o Marco
                Civil da Internet (Lei 12.965/14) e o Regulamento da UE n.
                2016/6790 (Regulamento Geral Europeu de Proteção de Dados
                Pessoais – RGDP). Ainda, o documento poderá ser atualizado em
                decorrência de eventual atualização normativa, razão pela qual
                se convida o usuário a consultar periodicamente esta seção.
              </p>
              <h3>2. Coleta de dados do usuário </h3>
              <p>
                A Política de Privacidade da LandPage da Daniela Polido inclui
                assegurar que seus dados pessoais não serão divulgados a
                terceiros para fins comerciais, ficando restritos à Daniela
                Polido quais dados serão encaminhados para a realização de
                melhor funcionamento.
              </p>
              <h3>2.1. Quando e quais dados são coletados</h3>
              <p>
                Os dados pessoais do usuário são recolhidos pelo site das
                seguinte formas:
                <li>
                  Quando o usuário encaminha informações via formulário de
                  contato: esses dados são os dados de identificação básicos de
                  nome completo e e-mail.
                </li>
              </p>
              <p>
                Quando um usuário acessa o site: Neste caso o site pode coletar
                os dados de localização do usuário ou do local da ocorrência da
                solicitação, através do Google. Além disso, serão coletados
                todos os dados preenchidos nos formulários pelo usuário.
              </p>
              <h3>
                2.2. Para que finalidades utilizamos os dados pessoais do
                usuário
              </h3>
              <p>
                Os dados pessoais do usuário coletados e armazenados pelo site
                tem por finalidade:
                <li>
                  Identificar o usuário de modo a garantir que seu contato seja
                  feito corretamente o contato da advogada;
                </li>
              </p>
              <p>
                O tratamento de dados pessoais para finalidades não previstas
                nesta Política de Privacidade somente ocorrerá mediante
                comunicação prévia ao usuário, de modo que os direitos e
                obrigações aqui previstos permanecem aplicáveis.
              </p>
              <h3>2.3. Dados sensíveis</h3>
              <p>
                Não serão coletados dados sensíveis dos usuários, assim
                entendidos aqueles definidos nos arts. 9º e 10 do RGDP e nos
                arts. 11 e seguintes da Lei de Proteção de Dados Pessoais.
                Assim, dentre outros, não haverá coleta dos seguintes casos:
                <li>
                  As opiniões políticas, as convicções religiosas ou
                  filosóficas, ou a filiação sindical do usuário;
                </li>
                <li>Dados genéticos;</li>
                <li>Dados que revelem a origem racial ou étnica, </li>
                <li>
                  Dados biométricos para identificar uma pessoa de forma
                  inequívoca;
                </li>
                <li>Dados relativos à saúde do usuário;</li>
                <li>
                  Dados relativos à vida sexual ou à orientação sexual do
                  usuário;
                </li>
                <li>
                  Dados relacionados a condenações penais ou a infrações ou com
                  medidas de segurança conexas.
                </li>
              </p>
            </div>
            <div className="cookies_definition">
              <h3>3. Cookies ou dados de navegação</h3>
              <p>
                Os cookies referem-se a arquivos de onde ficam armazenadas as
                informações relacionadas à navegação do usuário no site. Como é
                prática comum em quase todos os sites profissionais, este site
                usa cookies, que são pequenos arquivos baixados no seu
                computador, para melhorar sua experiência. Esta página descreve
                quais informações eles coletam, como as usamos e por que às
                vezes precisamos armazenar esses cookies. Também
                compartilharemos como você pode impedir que esses cookies sejam
                armazenados, no entanto, isso pode fazer o rebaixamento ou
                quebrar certos elementos da funcionalidade do site.
              </p>
              <h3>3.1. Como usamos os Cookies?</h3>
              <p>
                Utilizamos cookies por vários motivos, detalhados abaixo.
                Infelizmente, na maioria dos casos, não existem opções padrão do
                setor para desativar os cookies se desativar completamente a
                funcionalidade e os recursos que eles adicionam a este site. É
                recomendável que você deixe todos os cookies se não tiver
                certeza se precisa ou não deles, caso sejam usados para fornecer
                um serviço que você usa.
              </p>
              <h3>3.2. Desativar Cookies</h3>
              <p>
                Você pode impedir a configuração de cookies ajustando as
                configurações do seu navegador (consulte a ajuda do navegador
                para saber como fazer isso). Esteja ciente de que a desativação
                de cookies afetará a funcionalidade deste e de muitos outros
                sites que você visita. A desativação de cookies geralmente
                resultará na desativação de determinadas funcionalidades e
                recursos deste site. Portanto, é recomendável que você não
                desative os cookies.
              </p>

              <h3>3.3. Cookies relacionados a formulários</h3>
              <p>
                Quando você envia dados por meio de um formulário como os
                encontrados nas páginas de contato ou nos formulários de
                comentários, os cookies podem ser configurados para lembrar os
                detalhes do usuário para correspondência futura. Cookies de
                preferências do site Para proporcionar uma ótima experiência
                neste site, fornecemos a funcionalidade para definir suas
                preferências de como esse site é executado quando você o usa.
                Para lembrar suas preferências, precisamos definir cookies para
                que essas informações possam ser chamadas sempre que você
                interagir com uma página for afetada por suas preferências.
              </p>
              <h3>3.4. Cookies de terceiros</h3>
              <p>
                Em alguns casos especiais, também usamos cookies fornecidos por
                terceiros confiáveis. A seção a seguir detalha quais cookies de
                terceiros você pode encontrar através deste site. Este site usa
                um sistema de reservas de salas através de um formulário, que é
                uma das ferramentas que facilitam a sua reserva sem precisar de
                interações humanas e nos ajudar a melhorar nosso atendimento e
                melhorar sua experiência.
              </p>
              <p>
                As análises de terceiros são usadas para rastrear e medir o uso
                deste site, para que possamos continuar produzindo conteúdo
                atrativo. Esses cookies podem rastrear itens como o tempo que
                você passa no site ou as páginas visitadas, o que nos ajuda a
                entender como podemos melhorar o site para você.
              </p>
              <p>
                Este site usa o Google ADS, que é uma das soluções mais
                difundidas e confiáveis da Web, O Google Ads é o programa de
                publicidade online da Google. Através do Google Ads, pode criar
                anúncios online para alcançar as pessoas exatamente quando estão
                interessadas nos produtos e serviços oferecidos. Periodicamente,
                testamos novos recursos e fazemos alterações sutis na maneira
                como o site se apresenta. Quando ainda estamos testando novos
                recursos, esses cookies podem ser usados para garantir que você
                receba uma experiência consistente enquanto estiver no site,
                enquanto entendemos quais otimizações os nossos usuários mais
                apreciam.
              </p>
            </div>

            <div className="client_compromisse">
              <h3>
                4. Responsabilidade dos usuários no fornecimento de dados
                pessoais
              </h3>
              <p>
                O usuário se compromete a fazer uso adequado dos conteúdos e da
                informação que oferecemos no site e com caráter enunciativo, mas
                não limitativo: Não se envolver em atividades que sejam ilegais
                ou contrárias à boa fé a à ordem pública; Não difundir
                propaganda ou conteúdo de natureza racista, xenofóbica, ou casas
                de apostas online, jogos de sorte e azar, qualquer tipo de
                pornografia ilegal, de apologia ao terrorismo ou contra os
                direitos humanos; Não causar danos aos sistemas físicos
                (hardwares) e lógicos (softwares) de seus fornecedores ou
                terceiros, para introduzir ou disseminar vírus informáticos ou
                quaisquer outros sistemas de hardware ou software que sejam
                capazes de causar danos anteriormente mencionados.
              </p>
            </div>
            <div className="contact">
              <h3>5. Alterações para essa política de privacidade</h3>
              <p>
                A presente versão desta Política de Privacidade foi atualizada
                pela última vez em 31 de março de 2025. Reservamos o direito de
                modificar este documento a qualquer momento, então, é
                recomendável que o usuário revise-a com frequência.
              </p>
            </div>

            <button className="close-button" onClick={closeModal}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PrivacyPolicy;
