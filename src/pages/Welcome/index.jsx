import "./index.css";
import Navbar from "../../components/Navbar/Navbar";
import cover from "../../assets/Fotos/Cover.png";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div className="container-welcome">
      <Navbar />
      <div className="welcome">
        <div className="image-welcome">
          <img src={cover} alt="Advogada trabalhista Daniela Polido" />
        </div>
        <div className="text-welcome">
          <div className="text">
            <h1>Dra. Daniela Polido</h1>
            <p>direito trabalhista</p>
            <button className="button-welcome">
              <Link to="https://api.whatsapp.com/send/?phone=351912758571&text&type=phone_number&app_absent=0">
                Entre em Contato
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
