import { Colors } from "asset/enums";
import { ClientContext } from "components/contexts/client";
import { createArraysTimeLinePoints } from "helpers/helpers";
import { motion, MotionValue, useTransform } from "framer-motion";
import { useContext, useEffect, useMemo, useState } from "react";
import { TimeLinePointsType } from "../../asset/types";
import { useTriggerState } from "react-trigger-state";

function TimeLinePoints({ index, sWidth, children }: TimeLinePointsType) {
  const [scrollYProgress, x] = useTriggerState({
    name: "scrollYProgress",
  });

  const { innerWidth } = useContext(ClientContext);
  const arr = useMemo(
    () => createArraysTimeLinePoints(sWidth, innerWidth),
    [sWidth, innerWidth]
  );

  const transition = {
    type: "tween",
    stiffness: 120,
  };

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
