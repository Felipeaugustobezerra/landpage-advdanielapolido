import Styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Ebooks = () => {
  const videoId = "dY_bl8Vws1E";
  const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className={Styles.container_ebooks} id="container_ebooks_buy">
      <div className={Styles.ebooks_items}>
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={Styles.youtube_thumbnail_link}
          title="Assista ao vídeo no YouTube"
          aria-label="Assista ao vídeo no YouTube"
        >
          <div className={Styles.youtube_thumbnail}>
            <img src={thumbnail} alt="Thumbnail do vídeo" />
            <div className={Styles.play_button}>
              <svg width="64" height="64" viewBox="0 0 100 100" fill="none">
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  stroke="#1E2D44"
                  strokeWidth="8"
                  fill="white"
                />
                <polygon points="40,30 70,50 40,70" fill="#1E2D44" />
              </svg>
            </div>
          </div>
        </a>

        <div className={Styles.ebooks_items_text}>
          <h2>
            Tenha mais clareza, autonomia e segurança para
            <h1>gerir pessoas em Portugal de forma legal e responsável!</h1>
          </h2>
          <Link
            to="https://hotmart.com/pt-br/marketplace/produtos/guia-para-empreendedores-estrangeiros-em-portugal/K99712737F"
            target="_blank"
            className={Styles.button_ebooks}
          >
            Compre agora!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ebooks;
