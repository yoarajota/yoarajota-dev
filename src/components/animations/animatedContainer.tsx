import { DefaultAnimatedContainerType } from "asset/types";
import { createArrayAnimatedContainer } from "helpers/helpers";
import {
  useTransform,
  motion,
  useSpring,
  MotionValue,
  useMotionValue,
} from "framer-motion";
import { useMemo, useEffect, useContext } from "react";
import { stateStorage, useTriggerState } from "react-trigger-state";
import { ClientContext } from "components/contexts/client";

function AnimatedContainer({ children, end }: DefaultAnimatedContainerType) {
  const { ref, wrap, disabledAnimationsContainers } = useContext(ClientContext);

  const { pixels, opacityValue, motionValueArray } = useMemo(
    () => createArrayAnimatedContainer(end),
    [end]
  );

  let result = useSpring(
    useTransform(
      stateStorage.get("scrollYProgress"),
      (value: number) =>
        value +
        (ref?.current?.offsetHeight ?? 0.001) /
          (wrap?.current?.offsetHeight ?? 1)
    ),
    {
      stiffness: 120,
      damping: 30,
      restDelta: 0.0001,
      restSpeed: 1,
    }
  );

  const x = useTransform(result, motionValueArray, pixels);
  const opacity = useTransform(result, motionValueArray, opacityValue);

  return (
    <motion.div style={disabledAnimationsContainers ? {} : { x, opacity }}>
      {children}
    </motion.div>
  );
}

export default AnimatedContainer;
