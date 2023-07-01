import { Box, Center } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import Titles from "../../components/typography/titles";
import api from "../../api/axios";
import { useQuery } from "react-query";
import { AcademyType, Info, keyable } from "../../asset/types";
import _ from "lodash";
import { ClientContext } from "components/contexts/client";
import NormalText from "components/typography/normalText";
import InfinitySlideCarousel from "components/infinitySlideCarousel";
import { Colors } from "asset/enums";
import InfinityBoxSlideCarousel from "components/infinityBoxSlideCarousel";
import LinkText from "components/typography/linkText";
import { BsInfoLg } from "react-icons/bs";
import FadeInContainer from "components/animations/fadeInContainer";
import PopInContainer from "components/animations/popInContainer";
import { stateStorage } from "react-trigger-state";

function Academy({ modal }: AcademyType) {
  const {
    lang,
    msg,
    systemConfig: { academy },
  } = useContext(ClientContext);
  const scrollYProgress = stateStorage.get("scrollYProgress");

  const { data, refetch } = useQuery(
    "academy",
    () => {
      return api.get("api/acad");
    },
    { staleTime: 600000 }
  );

  const [info, setInfo] = useState<Info>({});
  const [fetched, setFetched] = useState<boolean>(false);

  useEffect(() => {
    scrollYProgress.onChange((hookedYPosition: number) => {
      if ((hookedYPosition ?? 0) > 0.35 && !fetched) {
        refetch().then(() => {
          setFetched(true);
        });
      } else if (fetched) {
        if ((hookedYPosition ?? 0) < 0.4) {
          setInfo({});
        } else if ((hookedYPosition ?? 0) > 0.4 && _.isEmpty(info)) {
          let a = data?.data.data[lang];
          if (a) setInfo(a[a.length - 1]);
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollYProgress]);

  return (
    <Box w="100%" textAlign="center">
      <Box paddingTop="65px">
        <Titles text={msg?.academy_title} />
      </Box>
      <Box m="0 auto" w="80%">
        <Box id="academic-big" p="0 0 3em 0" position="relative">
          <FadeInContainer delay={1} end={academy} classes="wrap-itens-academy">
            <Box className="first-container-academy">
              <Box
                cursor="pointer"
                marginBottom="0.5em"
                display="flex"
                alignItems="center"
                gap={"0.7em"}
                className="underline"
                w="fit-content"
              >
                <NormalText
                  functions={{
                    onClick: () => {
                      modal?.setModalData({
                        title: msg?.academy_name,
                        text: msg?.academy_extra_info,
                      });
                      modal?.onOpen();
                    },
                  }}
                  text={msg?.academy_name}
                />
                <BsInfoLg color={Colors.Gray} />
              </Box>
              <Box
                cursor="pointer"
                marginBottom="0.5em"
                display="flex"
                alignItems="center"
                gap={"0.7em"}
                className="underline"
                w="fit-content"
              >
                <NormalText
                  functions={{
                    onClick: () => {
                      modal?.setModalData({
                        title: msg?.academy_course,
                        text: msg?.academy_course_info,
                        href: msg?.href
                      });
                      modal?.onOpen();
                    },
                  }}
                  text={msg?.academy_course}
                />
                <BsInfoLg color={Colors.Gray} />
              </Box>
              <NormalText text={msg?.academy_start} />
            </Box>
            <Box marginTop="calc(2em - 10px)" w="50%">
              <InfinitySlideCarousel list={msg?.academy_subjects_list} />
            </Box>
          </FadeInContainer>
        </Box>
        <Box overflow="hidden" h="fit-content">
          <PopInContainer end={academy}>
            <InfinityBoxSlideCarousel
              list={[
                {
                  title: "Web Development",
                  inst: "Instituo Federal do Rio Grande do Sul",
                  text: "",
                },
                {
                  title: "Javascript",
                  inst: "Instituo Federal do Rio Grande do Sul",
                  text: "",
                },
                {
                  title: "Database",
                  inst: "Instituo Federal do Rio Grande do Sul",
                  text: "",
                },
                {
                  title: "Javascript Fundamentals",
                  inst: "Grasshopper",
                  text: "",
                },
              ]}
            />
          </PopInContainer>
        </Box>
        <Center gap="2em" p="0 0 1em 0" m={"0 0 1em 0"}>
          {["asdaskjdas", "çlaskdçlsakçldsa"].map((a: any, i) => (
            <Center key={_.uniqueId() + "link"}>
              <LinkText link="">{a}</LinkText>
            </Center>
          ))}
        </Center>
      </Box>
    </Box>
  );
}

export default Academy;
