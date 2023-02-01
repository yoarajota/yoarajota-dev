import { Box } from "@chakra-ui/react";
import { useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Scrollbar } from "../asset/types";
import { motion } from "framer-motion";
import { Colors } from "asset/enums";

function Scrollbar({ scrollY }: Scrollbar) {
  const scroll = useRef<HTMLDivElement>(null);
  scrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });
  const top = useTransform(scrollY, [0, 1], ["0%", "100%"]);

  return (
    <>
      <Box
        position={"fixed"}
        right={"15px"}
        m={"12.5vh 0"}
        zIndex={14}
        display="flex"
        justifyContent="center"
      >
        <Box w={"3px"} h={"75vh"} borderRadius="360px" bgColor={Colors.Purple}></Box>

        <motion.div
          ref={scroll}
          className="scroll-bar-point"
          style={{ top }}
        ></motion.div>
      </Box>
    </>
  );
}

export default Scrollbar;
