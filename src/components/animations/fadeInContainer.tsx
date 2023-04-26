import { DefaultAnimatedContainerType } from "asset/types";
import { createArrayAnimatedContainer } from "helpers/helpers";
import { useTransform, motion } from "framer-motion";
import { useMemo } from "react";

function FadeInContainer({ classes, motioned, children, delay, end }: DefaultAnimatedContainerType) {
  const { opacityValue, motionValueArray } = useMemo(
    () => createArrayAnimatedContainer(end, delay),
    [end, delay]
  );
  const opacity = useTransform(motioned, motionValueArray, opacityValue);

  return <motion.div className={classes} style={{ opacity }}>{children}</motion.div>;
}

export default FadeInContainer;
