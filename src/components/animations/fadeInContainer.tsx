import { DefaultAnimatedContainerType } from "asset/types";
import { createArrayAnimatedContainer } from "helpers/helpers";
import { useTransform, motion } from "framer-motion";
import { useMemo } from "react";
import { useTriggerState } from "react-trigger-state";

function FadeInContainer({
  classes,
  children,
  delay,
  end,
}: DefaultAnimatedContainerType) {
  const { opacityValue, motionValueArray } = useMemo(
    () => createArrayAnimatedContainer(end, delay),
    [end, delay]
  );
  const [motioned, x] = useTriggerState({
    name: "motioned",
  });

  const opacity = useTransform(motioned, motionValueArray, opacityValue);

  return (
    <motion.div className={classes} style={{ opacity }}>
      {children}
    </motion.div>
  );
}

export default FadeInContainer;
