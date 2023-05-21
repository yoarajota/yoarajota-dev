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
import Contact from "sections/contact";
import Projects from "sections/projects";
import ScrollPosition from "components/scrollPosition";

export default function Home() {
  const [modalData, setModalData] = useState<keyable>({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    innerWidth,
    systemConfig: { home },
    ref,
  } = useContext(ClientContext);

  return (
    <Box position="relative" paddingBottom="8em">
      <ScrollPosition />
      <Maintenance />
      {innerWidth > 767 && <Scrollbar />}
      <LanguagePop />
      <Box ref={ref}>
        <Resume />
      </Box>
      <AnimatedContainer end={home[0]}>
        <Exp />
      </AnimatedContainer>
      <AnimatedContainer end={home[1]}>
        <Academy modal={{ isOpen, onClose, onOpen, setModalData }} />
      </AnimatedContainer>
      <FadeInContainer end={home[2]}>
        <Tec />
      </FadeInContainer>
      <AnimatedContainer end={home[3]}>
        <Objectives />
        <Interest />
      </AnimatedContainer>
      <Contact />
      <Projects />
      <ModalWrap isOpen={isOpen} onClose={onClose} data={modalData} />
    </Box>
  );
}
