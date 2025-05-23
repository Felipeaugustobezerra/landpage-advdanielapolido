import "./index.css";
import about from "../../assets/Fotos/About.png";

const About = () => {
  return (
    <div className="container-about">
      <div className="about">
        <h1>Sobre</h1>
        <h5>
          Me chamo <b className="bold">Daniela Polido</b> e, antes de tudo, sou
          filha, irmã, esposa e mãe. Foi a segurança da minha família que me fez
          sair da zona de conforto e e repensar o lugar que chamo de
          &quot;lar&quot;. Minha paixão pelo Direito me acompanha{" "}
          <b className="bold">há mais de 20 anos</b> , especialmente no campo do
          Direito do Trabalho. Ao escolher Portugal como minha nova casa,
          reencontrei minhas raízes e construí uma ponte entre dois mundos que
          fazem parte de mim. Meu coração é metade Brasil, metade Portugal.
          Recentemente, concluí a
          <b className="bold">
            Pós-Graduação em Direito do Trabalho pela Universidade Católica do
            Porto{" "}
          </b>{" "}
          , consolidando minha atuação no cenário jurídico internacional.
          Atualmente, exerço diferentes funções que refletem meu compromisso com
          o Direito do Trabalho em âmbito global:
          <ul>
            <li className="list-about">
              Presidente da Comissão de Direito Internacional do Trabalho pelo
              IBDESC (Instituto Brasileiro de Direito Estrangeiro Comparado).
            </li>
          </ul>
          <ul>
            <li className="list-about">
              Membro da APODIT (Associação Portuguesa de Direito do Trabalho).
            </li>
          </ul>
          <ul>
            <li className="list-about">
              Membro da Comissão Internacional de Direito do Trabalho da ABA
              (Associação Brasileira de Advogados).
            </li>
          </ul>
          <h5>
            Minha missão é levar conhecimento sobre a legislação laboral em
            Portugal, auxiliando imigrantes de diversas nacionalidades a
            compreenderem seus direitos e obrigações no país. Acredito que a
            informação transforma vidas e fortalece a jornada de quem busca
            novas oportunidades. Este espaço é um convite para compartilhar
            experiências, trocar conhecimento e refletir sobre diferentes
            perspectivas. Vamos juntos construir um futuro melhor para as
            próximas gerações, porque o que fazemos hoje molda o mundo que
            deixaremos para nossos filhos.
          </h5>
        </h5>
      </div>
      <div className="image-about">
        <img src={about} alt="Sobre Advogada Daniela Polido" />
      </div>
    </div>
  );
};

export default About;
