import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { Colors, Children } from "../../asset/types";

function PulseAnimation({ children }: Children) {
  return (
    <motion.div
      animate={{
        x: [6, 16, 6],
        color: [ Colors.Orange, Colors.Black, Colors.Orange ],
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
