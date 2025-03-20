import "./index.css";
import Navbar from "../../components/Navbar/Navbar";
import cover from "../../assets/Fotos/Cover.png";
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
