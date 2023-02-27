import {
  Box, List, ListIcon, ListItem,
} from "@chakra-ui/react";
import { useContext, useEffect, useReducer, useState } from "react";
import Titles from "../../components/typography/titles";
import Timeline from "../../components/timeline";
import api from "../../api/axios";
import { useQuery } from "react-query";
import TextAnimation from "../../components/animations/textanimation";
import { Info, keyable, Section } from "../../asset/types";
import { AnimatePresence, motion } from "framer-motion";
import _ from "lodash";
import { LanguageContext } from "components/contexts/language";
import NormalText from "components/typography/normaltext";
import DOMPurify from "isomorphic-dompurify";
import { validateYupSchema } from "formik";
import { BiInfoCircle } from "react-icons/bi";
import { FiChevronRight } from "react-icons/fi";
import InfinityScrollCarousel from "components/infinityScrollCarousel";

const ACADEMY = 1
const COURSE = 2
const reducer = (state: keyable, action: keyable) => {
  switch (action.type) {
    case ACADEMY:
      return { ...state, academy: action.value }
    case COURSE:
      return { ...state, course: action.value }
    default:
      return state;
  }
};

function Academy({ callApi, scrollYProgress, hookedYPosition }: Section) {
  const { lang, msg } = useContext(LanguageContext);

  const { isLoading, data, error, refetch } = useQuery(
    "academy",
    () => {
      return api.get("http://localhost:3000/api/acad");
    },
    { staleTime: 1000 * 60 * 10, enabled: false }
  );

  const [info, setInfo] = useState<Info>({});
  const [fetched, setFetched] = useState<boolean>(false);
  const [hovered, dispatch] = useReducer(reducer, { academy: false, course: false });

  useEffect(() => {
    if (callApi && !fetched) {
      refetch().then(() => {
        setFetched(true);
      });
    }
  }, [callApi, fetched, refetch]);

  useEffect(() => {
    if ((hookedYPosition ?? 0) < 0.4) {
      setInfo({});
    } else if ((hookedYPosition ?? 0) > 0.4 && _.isEmpty(info)) {
      let a = data?.data.data[lang];
      if (a) setInfo(a[a.length - 1]);
    }
  }, [hookedYPosition]);

  return (
    <Box w="100%" textAlign="center">
      <Box paddingTop="65px">
        <Titles>{msg.academy_title}</Titles>
      </Box>
      <Box m='0 auto' w="90%">
        <Box id="academic-big" minH='20em' position='relative'>
          <Box w='75%' display='flex'>
            <Box marginTop='2em' w='60%' textAlign='left' position='relative'>
              <NormalText><p className="fit-content" onMouseLeave={() => dispatch({ type: ACADEMY, value: false })} onMouseEnter={() => dispatch({ type: ACADEMY, value: true })}>{msg.academy_name}</p></NormalText>
              <motion.div className="academy-extra-info" transition={{ type: "spring", mass: 0.4, delay: 0.1 }} animate={hovered.academy ? { maxHeight: "10em" } : { maxHeight: "0em" }}
              >
                <NormalText customFontSize="0.95rem">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(msg.academy_extra_info),
                    }}
                  /></NormalText>
              </motion.div>
              <NormalText><p className="fit-content" onMouseLeave={() => dispatch({ type: COURSE, value: false })} onMouseEnter={() => dispatch({ type: COURSE, value: true })}>{msg.academy_course}</p></NormalText>
              <motion.div className="academy-extra-info" transition={{ type: "spring", mass: 0.4, delay: 0.1 }} animate={hovered.course ? { maxHeight: "10em" } : { maxHeight: "0em" }}>
                <NormalText customFontSize="0.95rem">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(msg.academy_course_info),
                    }}
                  /></NormalText>
              </motion.div>
              <NormalText>{msg.academy_start}</NormalText>
            </Box>
            <Box w='40%'>
              <InfinityScrollCarousel list={['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG']} />
            </Box>
          </Box>
          <Box w='25%'>
            <Titles size="sm">Challenges</Titles>
          </Box>
        </Box>
      </Box>
      <Box id="academic-small" minH='20em' position='relative'>
        <Box m='2em auto 0 auto' w='80%' textAlign='left' position='relative'>
          <NormalText><p className="fit-content" onMouseLeave={() => dispatch({ type: ACADEMY, value: false })} onMouseEnter={() => dispatch({ type: ACADEMY, value: true })}>{msg.academy_name}</p></NormalText>
          <motion.div className="academy-extra-info" transition={{ type: "spring", mass: 0.4, delay: 0.1 }} animate={hovered.academy ? { maxHeight: "15em" } : { maxHeight: "0em" }}
          >
            <NormalText customFontSize="0.95rem">
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(msg.academy_extra_info),
                }}
              /></NormalText>
          </motion.div>
          <NormalText><p className="fit-content" onMouseLeave={() => dispatch({ type: COURSE, value: false })} onMouseEnter={() => dispatch({ type: COURSE, value: true })}>{msg.academy_course}</p></NormalText>
          <motion.div className="academy-extra-info" transition={{ type: "spring", mass: 0.4, delay: 0.1 }} animate={hovered.course ? { maxHeight: "15em" } : { maxHeight: "0em" }}>
            <NormalText customFontSize="0.95rem">
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(msg.academy_course_info),
                }}
              /></NormalText>
          </motion.div>
          <NormalText>{msg.academy_start}</NormalText>
          <Box w='40%'>
          </Box>
        </Box>
        <Box w='25%'>
        </Box>
      </Box>


      <Box minH='14em'>

      </Box>
    </Box>
  );
}

export default Academy;
