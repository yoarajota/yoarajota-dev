import { motion } from "framer-motion";
import { useEffect } from "react";
import { TimeLinePoints } from "../../asset/types";

function TimeLinePoints({ width, children }: TimeLinePoints) {
  const transition = {
    type: "tween",
    stiffness: 100,
    duration: 1,
  }
  return (
    <motion.div
      style={{ display: "flex", justifyContent: "right" }}
      animate={{
        width: width,
      }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

export default TimeLinePoints;
