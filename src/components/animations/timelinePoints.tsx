import { Colors } from "asset/enums";
import { ClientContext } from "components/contexts/client";
import { createArraysTimeLinePoints } from "components/helpers";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useContext, useEffect, useMemo } from "react";
import { TimeLinePoints } from "../../asset/types";

function TimeLinePoints({ index, sWidth, children, scrollYProgress }: TimeLinePoints) {
  const { innerHeight } = useContext(ClientContext);
  const arr = useMemo(() => createArraysTimeLinePoints(sWidth, innerHeight), [sWidth, innerHeight]);

  const transition = {
    type: "tween",
    stiffness: 120,
  }

  const width = useTransform(scrollYProgress, arr[0], arr[1]);

  return (
    <motion.div
      style={{
        position: "absolute",
        display: "flex",
        justifyContent: "right",
        zIndex: 15 - index + 5,
        background: `repeating-linear-gradient(to right,transparent,transparent 10px,${Colors.Black} 10px,${Colors.Black} 20px)`,
        width,
      }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

export default TimeLinePoints;
