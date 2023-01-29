import {
  Box,
} from "@chakra-ui/react";
import Exp from "../../src/sections/exp";
import Tec from "../../src/sections/tec";
import Resume from "../../src/sections/resume";
import Scrollbar from "../../src/components/scrollbar";
import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";

export default function Home() {
  const wrap = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start start", "end end"],
  });

  return (
    <Box ref={wrap}>
      <Scrollbar scrollY={scrollYProgress}/>
      <Resume />
      <Exp />
      <Tec />
    </Box>
  );
}
