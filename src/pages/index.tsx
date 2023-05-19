import { Box, useDisclosure } from "@chakra-ui/react";
import Exp from "../../src/sections/exp";
import Tec from "../../src/sections/tec";
import Resume from "../../src/sections/resume";
import Scrollbar from "../../src/components/scrollbar";
import { useContext, useEffect, useRef, useState } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";
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
import Contact from "sections/contact";
import Projects from "sections/projects";

export default function Home() {
  const [modalData, setModalData] = useState<keyable>({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { innerWidth, systemConfig: { home }, wrap, ref, scrollYProgress, motioned, calcPercentageWithoutResumeSection } = useContext(ClientContext);

  return (
    <Box ref={wrap} position="relative" paddingBottom="8em">
      <Maintenance />
      {innerWidth > 767 && <Scrollbar scrollY={scrollYProgress} />}
      <LanguagePop />
      <Box ref={ref}>
        <Resume />
      </Box>
      <AnimatedContainer end={home[0]} motioned={motioned}>
        <Exp
          // callApi={true}
        />
      </AnimatedContainer>
      {/* {willShow[0] && ( */}
      <AnimatedContainer end={home[1]} motioned={motioned}>
        <Academy
          modal={{ isOpen, onClose, onOpen, setModalData }}
        />
      </AnimatedContainer>
      {/* )} */}
      {/* {willShow[1] && ( */}
      <FadeInContainer end={home[2]} motioned={motioned}>
        <Tec />
      </FadeInContainer>
      {/* )} */}
      {/* {willShow[2] && ( */}
      <AnimatedContainer end={home[3]} motioned={motioned}>
        <Objectives />
        <Interest />
      </AnimatedContainer>
      {/* )} */}
      {/* <Phill413 /> */}
      <Contact />
      <Projects />
      <ModalWrap isOpen={isOpen} onClose={onClose} data={modalData} />
    </Box>
  );
}
