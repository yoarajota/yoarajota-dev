import {
  Box,
} from "@chakra-ui/react";
import Exp from "../../src/sections/exp";
import Tec from "../../src/sections/tec";
import Resume from "../../src/sections/resume";
import Scrollbar from "../../src/components/scrollbar";
import { useEffect, useRef, useState } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";

export default function Home() {
  const wrap = useRef<HTMLDivElement>(null)
  const [hookedYPosition, setHookedYPosition] = useState<number>();

  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start start", "end end"],
  });

  let motioned = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.0001
  });
  const x = useTransform(motioned, [0, 0.2, 0.4, 0.6, 0.8, 1], ["-1000px", "0px", "0px", "0px", "0px", "0px",]);
  const opacity = useTransform(motioned, [0, 0.2, 0.4, 0.6, 0.8, 1], ["0", "1", "1", "1", "1", "1",]);

  useEffect(() => {
    scrollYProgress.onChange(v => setHookedYPosition(v));
  }, [scrollYProgress]);

  return (
    <Box ref={wrap}>
      <Scrollbar scrollY={scrollYProgress} />
      <Resume />
      <motion.div
        style={{ x, opacity }}
      ><Exp scrollYProgress={motioned} callApi={(hookedYPosition ?? 0) > 0.15} /></motion.div>
      <Tec />
    </Box>
  );
}
