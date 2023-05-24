import { Box } from "@chakra-ui/react";
import { MotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useContext, useRef, useEffect } from "react";
import { useTriggerState } from "react-trigger-state";
import { ClientContext } from "./contexts/client";

function ScrollPosition() {
  const { wrap } = useContext(ClientContext);

  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start start", "end end"],
  });

  const [i, setHookedYPosition] = useTriggerState({
    name: "hookedYPosition",
    initial: 0,
  });

  const [ii, setScrollYProgressTriggerState] = useTriggerState({
    name: "scrollYProgress",
    initial: scrollYProgress,
  });

  useEffect(() => {
    const a = scrollYProgress.onChange((v) => {
      setHookedYPosition(v);
    });

    const b = scrollYProgress.onChange(() => {
      setScrollYProgressTriggerState(scrollYProgress);
    });

    return () => {
      a();
      b();
    };
  }, [scrollYProgress, setHookedYPosition, setScrollYProgressTriggerState]);

  return <Box ref={wrap} w="100%" h="100%" position="absolute" zIndex="hide"></Box>;
}

export default ScrollPosition;
