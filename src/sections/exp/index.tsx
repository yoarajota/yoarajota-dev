import {
  Box,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
// import { useRouter } from "next/router";
import Titles from "../../components/typography/titles";
import Timeline from "../../components/timeline";
import api from "../../api/axios";
import { useQuery } from "react-query";
import TextAnimation from "../../components/animations/textanimation";
import { Info, ExpType } from "../../asset/types";
import { AnimatePresence, motion } from "framer-motion";
import _ from "lodash";
import { ClientContext } from "components/contexts/client";
import NormalText from "components/typography/normaltext";

function Exp({ callApi, scrollYProgress, hookedYPosition, middleOfScreen }: ExpType) {
  const { lang } = useContext(ClientContext);

  const { data, refetch } = useQuery(
    "exp",
    () => {
      return api.get("api/exp");
    },
    { staleTime: 600000, enabled: false }
  );

  const [info, setInfo] = useState<Info>({});
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (callApi && !fetched) {
      refetch().then(() => {
        setFetched(true);
      });
    }
  }, [callApi, fetched, refetch]);

  useEffect(() => {
    if ((hookedYPosition ?? 0) < middleOfScreen) {
      setInfo({});
    } else if ((hookedYPosition ?? 0) > middleOfScreen && _.isEmpty(info)) {
      let a = data?.data.data[lang];
      if (a) setInfo(a[a.length - 1]);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hookedYPosition]);

  return (
    <Box w="100%" textAlign="center" minHeight="100vh">
      <Box paddingTop="65px">
        <Titles>Experiência Profissional</Titles>
      </Box>
      <Box w="100%">
        <Box h="110px" w="100%">
          <Timeline
            info={info}
            scrollYProgress={scrollYProgress}
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
                  <Box marginTop='1em'>
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
