import { AnimatedContainerType } from "asset/types";
import { createArrayAnimatedContainer } from "components/helpers";
import { useTransform, motion } from "framer-motion";
import { useMemo } from "react";

function AnimatedContainer({ motioned, children, end }: AnimatedContainerType) {
  const { pixels, opacityValue, motionValueArray } = useMemo(
    () => createArrayAnimatedContainer(end),
    [end]
  );
  const x = useTransform(motioned, motionValueArray, pixels);
  const opacity = useTransform(motioned, motionValueArray, opacityValue);

  return <motion.div style={{ x, opacity }}>{children}</motion.div>;
}

export default AnimatedContainer;
