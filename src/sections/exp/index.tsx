"use client";

import { Box } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import Titles from "../../components/typography/titles";
import Timeline from "../../components/timeline";
import { ExpData, Info } from "../../asset/types";
import { AnimatePresence, motion } from "framer-motion";
import _ from "lodash";
import { ClientContext } from "components/contexts/client";
import NormalText from "components/typography/normalText";
import TextAnimation from "components/animations/textAnimation";
import { stateStorage } from "react-trigger-state";

type ExpProps = { exp: ExpData };
function Exp({ exp }: ExpProps) {
  const { lang } = useContext(ClientContext);
  const [info, setInfo] = useState<Info>({});
  const scrollYProgress = stateStorage.get("scrollYProgress");

  useEffect(() => {
    scrollYProgress.onChange((hookedYPosition: number) => {
      if ((hookedYPosition ?? 0) < 0.1) {
        setInfo({});
      } else if ((hookedYPosition ?? 0) > 0.1 && _.isEmpty(info)) {
        let a = exp[lang as keyof ExpData];
        if (a) setInfo(a[a.length - 1]);
      }
    });
  }, [exp, info, lang, scrollYProgress]);

  return (
    <Box w="100%" textAlign="center" minHeight="100vh">
      <Box paddingTop="65px">
        <Titles text="Experiência Profissional" />
      </Box>
      <Box w="100%">
        <Box h="110px" w="100%">
          <Timeline
            info={info}
            data={exp[lang as keyof ExpData]}
            setInfo={setInfo}
          />
        </Box>
        <AnimatePresence>
          {!_.isEmpty(info) && (
            <>
              <Box m="0 0 50px 0">
                <TextAnimation title size={"md"} text={info.title} />
              </Box>
              <motion.div
                className="container-mediaquery-responsive-display"
                animate={{ opacity: [0, 1] }}
                exit={{ opacity: 0 }}
                key={_.uniqueId()}
              >
                <Box
                  p="0 7.5px"
                  className="box-text-child"
                  w="100%"
                  justifyContent="center"
                >
                  <TextAnimation text={info.text1} />
                </Box>
                <Box p="0 7.5px" w="100%" justifyContent="center">
                  <TextAnimation text={info.text2} />
                </Box>
                <Box
                  p="0 7.5px"
                  className="box-text-child"
                  w="100%"
                  justifyContent="center"
                >
                  <TextAnimation text={info.text3} />
                </Box>
              </motion.div>
              <motion.div exit={{ opacity: 0 }}>
                <NormalText
                  functions={{ marginTop: "1em" }}
                  customFontSize="28px"
                  text={info.time}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
}

export default Exp;
