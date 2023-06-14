import { DefaultAnimatedContainerType } from "asset/types";
import { createArrayAnimatedContainer } from "helpers/helpers";
import { useTransform, motion, useSpring } from "framer-motion";
import { useMemo, useContext } from "react";
import { ClientContext } from "components/contexts/client";
import { stateStorage, useTriggerState } from "react-trigger-state";

function FadeInContainer({
  classes,
  children,
  delay,
  end,
}: DefaultAnimatedContainerType) {
  const { ref, wrap } = useContext(ClientContext);
  const { opacityValue, motionValueArray } = useMemo(
    () => createArrayAnimatedContainer(end, delay),
    [end, delay]
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

  const opacity = useTransform(result, motionValueArray, opacityValue);

  return (
    <motion.div className={classes} style={{ opacity }}>
      {children}
    </motion.div>
  );
}

export default FadeInContainer;
