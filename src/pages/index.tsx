import { Box, useDisclosure } from "@chakra-ui/react";
import Exp from "../../src/sections/exp";
import Tec from "../../src/sections/tec";
import Resume from "../../src/sections/resume";
import Scrollbar from "../../src/components/scrollbar";
import { useContext, useEffect, useRef, useState } from "react";
import { useScroll, useSpring } from "framer-motion";
import AnimatedContainer from "components/animations/animatedContainer";
import FadeInContainer from "components/animations/fadeInContainer";
import LanguagePop from "components/languagePop";
import Academy from "sections/academy";
import ModalWrap from "components/modal";
import Maintenance from "components/maintenance";
import { keyable } from "asset/types";
import { ClientContext } from "components/contexts/client";
import Objectives from "sections/objectives";
import Interest from "sections/interest";
import Phill413 from "sections/phill413";

export default function Home() {
  const wrap = useRef<HTMLDivElement>(null);
  const [hookedYPosition, setHookedYPosition] = useState<number>();
  const [modalData, setModalData] = useState<keyable>({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { innerHeight, innerWidth } = useContext(ClientContext);

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
    <Box ref={wrap} position="relative">
      <Maintenance />
      {innerWidth > 767 && <Scrollbar scrollY={scrollYProgress} />}
      <LanguagePop />
      <Resume />
      <AnimatedContainer end={innerWidth < 700 ? 2 : 0} motioned={motioned}>
        <Exp
          scrollYProgress={motioned}
          hookedYPosition={hookedYPosition}
          callApi={(hookedYPosition ?? 0) > 0.15}
        />
      </AnimatedContainer>
      <AnimatedContainer end={innerHeight < 700 ? 6 : 4} motioned={motioned}>
        <Academy
          modal={{ isOpen, onClose, onOpen, setModalData }}
          scrollYProgress={motioned}
          hookedYPosition={hookedYPosition}
          callApi={(hookedYPosition ?? 0) > 0.35}
        />
      </AnimatedContainer>
      <FadeInContainer end={innerHeight < 700 ? 11 : 8} motioned={motioned}>
        <Tec />
      </FadeInContainer>
      <AnimatedContainer end={innerHeight < 700 ? 19 : 17} motioned={motioned}>
        <Objectives />
        <Interest />
      </AnimatedContainer>
      <Phill413 />
      <ModalWrap isOpen={isOpen} onClose={onClose} data={modalData} />
    </Box>
  );
}
