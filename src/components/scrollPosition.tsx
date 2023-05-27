import { Box } from "@chakra-ui/react";
import { MotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useContext, useRef, useEffect } from "react";
import { stateStorage, useTriggerState } from "react-trigger-state";
import { ClientContext } from "./contexts/client";

function ScrollPosition() {
  const { wrap } = useContext(ClientContext);

  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start start", "end end"],
  });

  const [ii, yy] = useTriggerState({
    name: "scrollYProgress",
    initial: scrollYProgress,
  });
  stateStorage.set("scrollYProgress", scrollYProgress);
  useEffect(() => {
    const a = scrollYProgress.onChange((v) => {
      stateStorage.set("hookedYPosition", v);
    });

    return () => {
      a();
    };
  }, [scrollYProgress]);

  return <Box ref={wrap} w="100%" h="100%" position="absolute" zIndex="hide"></Box>;
}

export default ScrollPosition;
