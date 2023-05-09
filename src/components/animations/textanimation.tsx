import { motion } from "framer-motion";
import NormalText from "../typography/normaltext";
import Titles from "../typography/titles";

function TextAnimation(props: {
  text: string;
  title?: boolean | null;
  size?: string;
}) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {!props.title ? (
        <NormalText text={props.text}></NormalText>
      ) : (
          <Titles size={props.size} text={props.text} />
      )}
    </motion.div>
  );
}

export default TextAnimation;
