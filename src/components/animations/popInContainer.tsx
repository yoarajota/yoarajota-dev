import { DefaultAnimatedContainerType } from "asset/types";
import { createArrayPopInContainer } from "helpers/helpers";
import { useTransform, motion, useSpring } from "framer-motion";
import { useMemo, useContext } from "react";
import { useTriggerState } from "react-trigger-state";
import { ClientContext } from "components/contexts/client";

function PopInContainer({
  classes,
  children,
  end,
  delay, 
  from = 200
}: DefaultAnimatedContainerType) {
  const { ref, wrap } = useContext(ClientContext);
  const { pixels, motionValueArray } = useMemo(
    () => createArrayPopInContainer(end, from, delay),
    [delay, end, from]
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

  const y = useTransform(result, motionValueArray, pixels);

  return (
    <motion.div className={classes} style={{ y }} transition={{ delay }}>
      {children}
    </motion.div>
  );
}

export default PopInContainer;
