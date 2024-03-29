import { Colors } from "asset/enums";
import { ClientContext } from "components/contexts/client";
import { createArraysTimeLinePoints } from "helpers/helpers";
import { motion, MotionValue, useSpring, useTransform } from "framer-motion";
import { useContext, useEffect, useMemo, useState } from "react";
import { TimeLinePointsType } from "../../asset/types";
import { stateStorage, useTriggerState } from "react-trigger-state";

function TimeLinePoints({ index, sWidth, children }: TimeLinePointsType) {
  const { innerWidth } = useContext(ClientContext);
  const arr = createArraysTimeLinePoints(sWidth, innerWidth);
  const transition = {
    type: "tween",
    stiffness: 140,
  };

  const width = useTransform(stateStorage.get("scrollYProgress"), arr[0], arr[1])

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
