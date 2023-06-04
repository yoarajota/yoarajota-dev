import { DefaultAnimatedContainerType } from "asset/types";
import { createArrayAnimatedContainer } from "helpers/helpers";
import { useTransform, motion, useSpring } from "framer-motion";
import { useMemo, useContext } from "react";
import { ClientContext } from "components/contexts/client";
import { useTriggerState } from "react-trigger-state";

function FadeInContainer({
  classes,
  children,
  delay,
  end,
  container = true
}: DefaultAnimatedContainerType) {
  const { ref, wrap, disabledAnimationsContainers } = useContext(ClientContext);
  const { opacityValue, motionValueArray } = useMemo(
    () => createArrayAnimatedContainer(end, delay),
    [end, delay]
  );

  const [scrollYProgress, i] = useTriggerState({
    name: "scrollYProgress",
  });

  let result = useSpring(
    useTransform(
      scrollYProgress,
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
    <motion.div
      className={classes}
      style={!container || !disabledAnimationsContainers ? { opacity } : {}}
    >
      {children}
    </motion.div>
  );
}

export default FadeInContainer;
