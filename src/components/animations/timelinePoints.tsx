import { createArraysTimeLinePoints } from "components/helpers";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useMemo } from "react";
import { TimeLinePoints } from "../../asset/types";

function TimeLinePoints({ index, sWidth, children, scrollYProgress }: TimeLinePoints) {
  const arr = useMemo(() => createArraysTimeLinePoints(sWidth), [sWidth]);

  const transition = {
    type: "tween",
    stiffness: 100,
    duration: 1,
  }


  var width = useTransform(useMotionValue(0), [0, 1], ["0%", "0%"]);
  if (sWidth) {
    width = useTransform(scrollYProgress, arr[0], arr[1]);
  }

  return (
    <motion.div
      style={{ position: 'absolute', display: "flex", justifyContent: "right", zIndex: index + 5, width }}
      transition={transition} 
    >
      {children}
    </motion.div>
  );
}

export default TimeLinePoints;
