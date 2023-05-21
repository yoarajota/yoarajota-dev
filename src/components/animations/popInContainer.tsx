import { DefaultAnimatedContainerType } from "asset/types";
import { createArrayPopInContainer } from "helpers/helpers";
import { useTransform, motion } from "framer-motion";
import { useMemo } from "react";
import { useTriggerState } from "react-trigger-state";

function PopInContainer({
  classes,
  children,
  end,
}: DefaultAnimatedContainerType) {
  const { pixels, motionValueArray } = useMemo(
    () => createArrayPopInContainer(end, 200),
    [end]
  );
  const [motioned, x] = useTriggerState({
    name: "motioned",
  });

  const y = useTransform(motioned, motionValueArray, pixels);

  return (
    <motion.div className={classes} style={{ y }}>
      {children}
    </motion.div>
  );
}

export default PopInContainer;
