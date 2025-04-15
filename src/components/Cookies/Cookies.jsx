import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ReactDOM from "react-dom";
import "./cookies.css";
import PrivacyPolicy from "./PrivacyPolicy";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cookies, setCookie] = useCookies(["policyAccepted"]);

  useEffect(() => {
    const accepted = cookies.policyAccepted;

    if (!accepted) {
      setIsVisible(true);
      document.documentElement.style.overflow = "hidden"; // bloqueia <html>
      document.body.style.overflow = "hidden"; // bloqueia <body>
    } else {
      setIsVisible(false);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [cookies.policyAccepted]);

  const acceptPolicy = () => {
    setCookie("policyAccepted", true, {
      path: "/",
      expires: new Date(Date.now() + 2678400000), // 31 dias
    });

    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <div className="cookie_overlay">
      <div className="cookie_banner">
        <p className="cookie_info">
          Este site utiliza cookies para melhorar a experiência do usuário. Ao
          continuar navegando, você concorda com nossa <PrivacyPolicy />
        </p>
        <button onClick={acceptPolicy} className="cookie_button">
          Aceitar
        </button>
      </div>
    </div>,
    document.body
  );
};

export default CookieConsent;
