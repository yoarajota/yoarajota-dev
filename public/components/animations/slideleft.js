import { motion } from "framer-motion";
import { useEffect } from "react";

function SlideFromLeft({ position, howFar, delay, children }) {
  return (
    <motion.div
      animate={{
        x: howFar,
      }}
      transition={{
        duration: delay ?? 1,
        type: "tween",
        stiffness: 100,
      }}
    >
      {children}
    </motion.div>
  );
}

export default SlideFromLeft;
