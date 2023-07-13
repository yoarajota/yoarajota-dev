import { Box } from "@chakra-ui/react";
import { useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Colors } from "asset/enums";
import { stateStorage } from "react-trigger-state";
import FromRightPopupAnimation from "./animations/fromRightPopupAnimation";

function Scrollbar() {
  const scrollY = useSpring(stateStorage.get("scrollYProgress"), {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  const top = useTransform(scrollY, [0, 1], ["0%", "100%"]);

  return (
    <FromRightPopupAnimation keyProp="scroll-bar" className="scrollbar-wrap">
      <Box
        w={"3px"}
        h={"75vh"}
        borderRadius="360px"
        bgColor={Colors.Purple}
      />
      <motion.div className="scroll-bar-point" style={{ top }}></motion.div>
    </FromRightPopupAnimation>
  );
}

export default Scrollbar;
