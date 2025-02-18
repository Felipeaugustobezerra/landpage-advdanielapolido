import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";
import "./UnderConstruction.css";

export default function UnderConstruction() {
  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="content"
      >
        <FaTools className="icon" />
        <h1 className="title">Site em Desenvolvimento</h1>
        <p className="description">
          Estamos trabalhando para trazer algo incrível para você. Fique ligado!
        </p>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="notify-button"
      >
        Notifique-me
      </motion.button>
    </div>
  );
}
