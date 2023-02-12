import { Box } from "@chakra-ui/react";
import Exp from "../../src/sections/exp";
import Tec from "../../src/sections/tec";
import Resume from "../../src/sections/resume";
import Scrollbar from "../../src/components/scrollbar";
import { useEffect, useRef, useState } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import AnimatedContainer from "components/animations/animatedContainer";
import FadeInContainer from "components/animations/fadeInContainer";

export default function Home() {
  const wrap = useRef<HTMLDivElement>(null);
  const [hookedYPosition, setHookedYPosition] = useState<number>();

  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start start", "end end"],
  });

  let motioned = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.0001,
    restSpeed: 1,
  });

  useEffect(() => {
    scrollYProgress.onChange((v) => setHookedYPosition(v));
  }, [scrollYProgress]);

  return (
    <Box ref={wrap}>
      <Scrollbar scrollY={scrollYProgress} />
      <Resume />
      <AnimatedContainer end={0} motioned={motioned}>
        <Exp
          scrollYProgress={motioned}
          hookedYPosition={hookedYPosition}
          callApi={(hookedYPosition ?? 0) > 0.15}
        />
      </AnimatedContainer>
      <FadeInContainer end={6} motioned={motioned}>
        <Tec />
      </FadeInContainer>
    </Box>
  );
}
