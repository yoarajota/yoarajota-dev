import { motion } from "framer-motion";
import { RainbowAnimation as RainbowAnimationType } from "../../asset/types";
import { Colors } from "asset/enums";

function RainbowAnimation({ otherColor, children }: RainbowAnimationType) {
  return (
    <motion.div
      animate={{
        color: [
          otherColor ?? Colors.Orange,
          Colors.DarkPurple,
          otherColor ?? Colors.Orange,
        ],
      }}
      transition={{
        repeat: Infinity,
        duration: 1,
      }}
    >
      {children}
    </motion.div>
  );
}

export default RainbowAnimation;
