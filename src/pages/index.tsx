import { Box, useDisclosure } from "@chakra-ui/react";
import React, { useMemo } from "react";
import Exp from "../../src/sections/exp";
import Tec from "../../src/sections/tec";
import Resume from "../../src/sections/resume";
import Scrollbar from "../../src/components/scrollbar";
import { useContext, useState, useEffect } from "react";
import AnimatedContainer from "components/animations/animatedContainer";
import FadeInContainer from "components/animations/fadeInContainer";
import Popup from "components/popup";
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
    animationContainers,
  } = useContext(ClientContext);

  let c = 0;
  const components = useMemo(() => {
    return [
      {
        comp: [Exp],
        container: { type: AnimatedContainer, props: { end: home[0] } },
        props: {},
        comp_name: ["Exp"],
        container_name: "container-" + c++,
      },
      {
        comp: [Academy],
        container: { type: AnimatedContainer, props: { end: home[1] } },
        props: { modal: { isOpen, onClose, onOpen, setModalData } },
        comp_name: ["Academy"],
        container_name: "container-" + c++,
      },
      {
        comp: [Tec],
        container: { type: FadeInContainer, props: { end: home[2] } },
        props: {},
        comp_name: ["Tec"],
        container_name: "container-" + c++,
      },
      {
        comp: [Interest, Objectives],
        container: { type: AnimatedContainer, props: { end: home[3] } },
        props: { end: home[3] },
        comp_name: ["Objectives"],
        container_name: "container-" + c++,
      },
      {
        comp: [Contact],
        container: { type: FadeInContainer, props: { end: home[4] } },
        props: {},
        comp_name: ["Contact"],
        container_name: "container-" + c++,
      },
      {
        comp: [Projects],
        container: { type: AnimatedContainer, props: { end: home[5] } },
        props: {},
        comp_name: ["Projects"],
        container_name: "container-" + c++,
      },
    ];
  }, [c, home, isOpen, onClose, onOpen]);

  return (
    <Box position="relative" paddingBottom="8em">
      <ScrollPosition />
      <Maintenance />
      <Popup />
      {innerWidth > 767 && <Scrollbar />}
      <Box ref={ref}>
        <Resume />
      </Box>

      {!animationContainers
        ? components.map((comp) => {
          return comp.comp.map((C, index) => (
            <C key={comp.container_name[index]} {...comp.props} />
          ));
        })
        : components.map((comp) => {
          return (
            <comp.container.type
              key={comp.container_name}
              {...comp.container.props}
            >
              {comp.comp.map((C, index) => (
                <C key={comp.container_name[index]} {...comp.props} />
              ))}
            </comp.container.type>
          );
        })}
      <ModalWrap isOpen={isOpen} onClose={onClose} data={modalData} />
    </Box>
  );
}
