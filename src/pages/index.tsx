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

export default function Home() {
  const wrap = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [hookedYPosition, setHookedYPosition] = useState<number>();
  const [modalData, setModalData] = useState<keyable>({});
  const [arrEnd, setArrEnd] = useState<Array<number>>([]);
  // const [willShow, setWillShow] = useState<Array<boolean>>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { innerWidth } = useContext(ClientContext);
  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start start", "end end"],
  });

  const calcPercentageWithoutResumeSection = ( ref.current?.offsetHeight ?? 0.001) / (wrap.current?.offsetHeight  ?? 1);
  const sum = useTransform(
    scrollYProgress,
    (value) => value + calcPercentageWithoutResumeSection
  )

  const motioned = useSpring(
    sum,
    {
      stiffness: 120,
      damping: 30,
      restDelta: 0.0001,
      restSpeed: 1,
    }
  );

  useEffect(() => {
    scrollYProgress.onChange((v) => {
      setHookedYPosition(v);
    });
  }, [scrollYProgress]);

  // useEffect(() => {
  //   console.log(willShow)
  // }, [willShow]);

  useEffect(() => {
    if (innerWidth < 768) {
      setArrEnd([2, 5, 9, 14]);
    } else if (innerWidth < 1440) {
      setArrEnd([1, 4, 9, 15]);
    } else {
      setArrEnd([2, 5, 8, 16]);
    }
  }, [innerWidth]);

  return (
    <Box ref={wrap} position="relative">
      <Maintenance />
      {innerWidth > 767 && <Scrollbar scrollY={scrollYProgress} />}
      <LanguagePop />
      <Box ref={ref}>
        <Resume />
      </Box>
      <AnimatedContainer end={arrEnd[0]} motioned={motioned}>
        <Exp
          middleOfScreen={calcPercentageWithoutResumeSection}
          scrollYProgress={motioned}
          hookedYPosition={hookedYPosition}
          callApi={true}
        />
      </AnimatedContainer>
      {/* {willShow[0] && ( */}
        <AnimatedContainer end={arrEnd[1]} motioned={motioned}>
          <Academy
            modal={{ isOpen, onClose, onOpen, setModalData }}
            scrollYProgress={motioned}
            hookedYPosition={hookedYPosition}
            callApi={(hookedYPosition ?? 0) > 0.35}
          />
        </AnimatedContainer>
      {/* )} */}
      {/* {willShow[1] && ( */}
        <FadeInContainer end={arrEnd[2]} motioned={motioned}>
          <Tec />
        </FadeInContainer>
      {/* )} */}
      {/* {willShow[2] && ( */}
        <AnimatedContainer end={arrEnd[3]} motioned={motioned}>
          <Objectives />
          <Interest />
        </AnimatedContainer>
      {/* )} */}
      <Phill413 />
      <Contact />
      <ModalWrap isOpen={isOpen} onClose={onClose} data={modalData} />
    </Box>
  );
}
