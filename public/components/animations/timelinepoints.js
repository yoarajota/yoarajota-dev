import { motion } from "framer-motion";
import { useEffect } from "react";

function TimeLinePoints({ width, children }) {
  return (
    <motion.div
      style={{ display: "flex", justifyContent: "right" }}
      animate={{
        width: width,
      }}
      transition={{
        type: "tween",
        stiffness: 100,
        duration: 1,
      }}
    >
      {children}
    </motion.div>
  );
}

export default TimeLinePoints;
