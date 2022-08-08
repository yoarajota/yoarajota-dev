import { motion } from "framer-motion";
import Normaltext from "../typography/normaltext";
import Titles from "../typography/titles";

function TextAnimation({ text, title, customFontSize }) {
  return (
    <motion.div
      key={text}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {!title ? (
        <Normaltext>{text}</Normaltext>
      ) : (
        <Titles customFontSize={customFontSize}>{text}</Titles>
      )}
    </motion.div>
  );
}

export default TextAnimation;
