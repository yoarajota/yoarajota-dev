import { DefaultAnimatedContainerType } from "asset/types";
import { createArrayAnimatedContainer } from "components/helpers";
import { useTransform, motion } from "framer-motion";
import { useMemo } from "react";

function FadeInContainer({ classes, motioned, children, end }: DefaultAnimatedContainerType) {
  const { opacityValue, motionValueArray } = useMemo(
    () => createArrayAnimatedContainer(end),
    [end]
  );
  const opacity = useTransform(motioned, motionValueArray, opacityValue);

  return <motion.div className={classes} style={{ opacity }}>{children}</motion.div>;
}

export default FadeInContainer;
