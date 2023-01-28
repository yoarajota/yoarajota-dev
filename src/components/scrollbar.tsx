import { Box } from "@chakra-ui/react";
import { useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Scrollbar } from "../asset/types";
import { motion } from "framer-motion";

function Scrollbar({ currentPosition, scrollYProgress }: Scrollbar) {
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      });
    const scroll = useRef<HTMLDivElement>(null)
    // const position = currentPosition / scroll.current?.offsetHeight ?? 1;

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
        <Box w={"4px"} h={"75vh"} backgroundColor={"red"} bg=""></Box>

        <motion.div
          className="scroll-bar-point"
          style={{ scaleY }}
        ></motion.div>
      </Box>
    </>
  );
}

export default Scrollbar;
