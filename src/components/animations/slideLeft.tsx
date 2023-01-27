import { motion } from "framer-motion";
import { ForwardRefExoticComponent, useEffect } from "react";
import { SlideLeft } from "../../asset/types";

function SlideFromLeft({ howFar, delay, children }: SlideLeft) {
  const transition = {
    duration: delay ?? 1,
    type: "tween",
    stiffness: 100,
  }

  return (
    <motion.div
      animate={{
        x: howFar,
      }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

export default SlideFromLeft;
