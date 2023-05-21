import { DefaultAnimatedContainerType } from "asset/types";
import { createArrayAnimatedContainer } from "helpers/helpers";
import { useTransform, motion } from "framer-motion";
import { useMemo } from "react";
import { useTriggerState } from "react-trigger-state";

function AnimatedContainer({ children, end }: DefaultAnimatedContainerType) {
  const { pixels, opacityValue, motionValueArray } = useMemo(
    () => createArrayAnimatedContainer(end),
    [end]
  );
  const [motioned, i] = useTriggerState({
    name: "motioned",
  });

  const x = useTransform(motioned, motionValueArray, pixels);
  const opacity = useTransform(motioned, motionValueArray, opacityValue);

  return <motion.div style={{ x, opacity }}>{children}</motion.div>;
}

export default AnimatedContainer;
