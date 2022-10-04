import { motion } from "framer-motion";
import { useEffect } from "react";

function PulseAnimation({ position, howFar, delay, children, otherColor }) {
  return (
    <motion.div
      animate={{
        x: [6, 16, 6],
        color: [ "#D99E6A", "#0d0d0d", "#D99E6A" ],
      }}
      transition={{ 
        repeat: Infinity, 
        duration: 2 }}
    >
      {children}
    </motion.div>
  );
}

export default PulseAnimation;
