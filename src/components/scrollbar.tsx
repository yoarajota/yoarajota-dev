import { Box } from "@chakra-ui/react";
import { useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Colors } from "asset/enums";
import { stateStorage, useTriggerState } from "react-trigger-state";

function Scrollbar() {
  const scrollY = useSpring(stateStorage.get("scrollYProgress"), {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  const top = useTransform(scrollY, [0, 1], ["0%", "100%"]);

  return (
    <Box
      position={"fixed"}
      right={"15px"}
      m={"12.5vh 0"}
      zIndex={14}
      display="flex"
      justifyContent="center"
    >
      <Box
        w={"3px"}
        h={"75vh"}
        borderRadius="360px"
        bgColor={Colors.Purple}
      ></Box>

      <motion.div className="scroll-bar-point" style={{ top }}></motion.div>
    </Box>
  );
}

export default Scrollbar;
