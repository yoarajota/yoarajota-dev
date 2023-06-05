import { Box } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import Titles from "../../components/typography/titles";
import Timeline from "../../components/timeline";
import api from "../../api/axios";
import { useQuery } from "react-query";
import TextAnimation from "../../components/animations/textAnimation";
import { Info } from "../../asset/types";
import { AnimatePresence, motion } from "framer-motion";
import _ from "lodash";
import { ClientContext } from "components/contexts/client";
import NormalText from "components/typography/normaltext";
import { stateStorage } from "react-trigger-state";

function Exp() {
  const { lang } = useContext(ClientContext);
  const [info, setInfo] = useState<Info>({});
  const [fetched, setFetched] = useState(false);
  const scrollYProgress = stateStorage.get("scrollYProgress");
  const { data, refetch } = useQuery(
    "exp",
    () => {
      return api.get("api/exp");
    },
    { staleTime: 600000 }
  );

  useEffect(() => {
    if (true && !fetched) {
      refetch().then(() => {
        setFetched(true);
      });
    }
  }, [fetched, refetch]);

  useEffect(() => {
    scrollYProgress.onChange((hookedYPosition: number) => {
      if ((hookedYPosition ?? 0) < 0.1) {
        setInfo({});
      } else if ((hookedYPosition ?? 0) > 0.1 && _.isEmpty(info)) {
        let a = data?.data.data[lang];
        if (a) setInfo(a[a.length - 1]);
      }
    });
  }, [data?.data.data, info, lang, scrollYProgress]);

  return (
    <Box w="100%" textAlign="center" minHeight="100vh">
      <Box paddingTop="65px">
        <Titles text="Experiência Profissional" />
      </Box>
      <Box w="100%">
        <Box h="110px" w="100%">
          <Timeline
            info={info}
            data={data?.data.data[lang]}
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
                  className="box-text-child"
                  w="100%"
                  justifyContent="center"
                >
                  <TextAnimation text={info.text1} />
                </Box>
                <Box m="0 15px" w="100%" justifyContent="center">
                  <TextAnimation text={info.text2} />
                </Box>
                <Box
                  className="box-text-child"
                  w="100%"
                  justifyContent="center"
                >
                  <TextAnimation text={info.text3} />
                </Box>
              </motion.div>
              <Box
                position="sticky"
                bottom="0"
                w="100%"
                justifyContent="center"
              >
                <Box
                  w="100%"
                  h="100%"
                  filter="blur(4px)"
                  opacity="0.8"
                  backgroundColor="#0d0d0d"
                  zIndex={-1}
                  position="absolute"
                ></Box>
                <motion.div exit={{ opacity: 0 }}>
                  <Box marginTop="1em">
                    <NormalText customFontSize="28px" text={info.time} />
                  </Box>
                </motion.div>
              </Box>
            </>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
}

export default Exp;
