import { Box } from "@chakra-ui/react";
import { useScroll } from "framer-motion";
import { useContext } from "react";
import { stateStorage, useTriggerState } from "react-trigger-state";
import { ClientContext } from "./contexts/client";

function ScrollPosition() {
  const { wrap } = useContext(ClientContext);

  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start start", "end end"],
  });

  useTriggerState({
    name: "scrollYProgress",
    initial: scrollYProgress,
  });

  stateStorage.set("scrollYProgress", scrollYProgress);

  return (
    <Box ref={wrap} w="100%" h="100%" position="absolute" zIndex="hide" />
  );
}

export default ScrollPosition;
