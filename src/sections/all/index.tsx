import { Box, useDisclosure } from "@chakra-ui/react";
import React, { useMemo, useContext, useState, useCallback } from "react";
import AnimatedContainer from "components/animations/animatedContainer";
import FadeInContainer from "components/animations/fadeInContainer";
import Popup from "components/popup";
import Academy from "sections/academy";
import ModalWrap from "components/modal";
import Maintenance from "components/maintenance";
import { Comment, ExpData, keyable } from "asset/types";
import {
  ClientContext,
} from "components/contexts/client";
import Objectives from "sections/objectives";
import Interest from "sections/interest";
import Contact from "sections/contact";
import Projects from "sections/projects";
import ScrollPosition from "components/scrollPosition";
import Feedback from "sections/feedback";
import Resume from "sections/resume";
import Scrollbar from "components/scrollbar";
import Exp from "sections/exp";
import Tec from "sections/tec";


type AllProps = { comments: Array<Comment>, exp: ExpData }

export default function All({ comments, exp }: AllProps) {
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
      {
        comp: [Feedback],
        container: { type: FadeInContainer, props: { end: home[6] } },
        props: {},
        comp_name: ["Feedback"],
        container_name: "container-" + c++,
      },
    ];
  }, [c, home, isOpen, onClose, onOpen]);

  const mountProps = useCallback((comp: keyable) => {
    let expData = {} as ExpData;
    if (comp.comp_name.includes("Exp")) {
      expData = exp;
    }
    let feedbackData = [] as Array<Comment>;
    if (comp.comp_name.includes("Feedback")) {
      feedbackData = comments;
    }
    let projectData = [] as Array<keyable>;
    if (comp.comp_name.includes("Projects")) {
      projectData = comments;
    }
    return {
      feedbackData,
      expData,
      projectData
    }
  }, [])

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
          let { feedbackData, expData, projectData } = mountProps(comp)

          return comp.comp.map((C, index) => (
            <C projects={projectData} comments={feedbackData} exp={expData} key={comp.container_name[index]} {...comp.props} />
          ));
        })
        : components.map((comp) => {
          let { feedbackData, expData, projectData } = mountProps(comp)

          return (
            <comp.container.type
              key={comp.container_name}
              {...comp.container.props}
            >
              {comp.comp.map((C, index) => (
                <C projects={projectData} comments={feedbackData} exp={expData} key={comp.container_name[index]} {...comp.props} />
              ))}
            </comp.container.type>
          );
        })}
      <ModalWrap isOpen={isOpen} onClose={onClose} data={modalData} />
    </Box>
  );
}
