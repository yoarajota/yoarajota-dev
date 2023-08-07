'use client'

import { Box, Center } from "@chakra-ui/react";
import { Colors } from "asset/enums";
import { ClientContext } from "components/contexts/client";
import { useContext } from "react";
import Skills from "../../components/skills";
import Titles from "../../components/typography/titles";
import Yj from "../../components/yj";
import NormalText from "components/typography/normalText";
import { motion } from "framer-motion";
import ImageAndButtons from "components/imageAndButtons";
import FadeInFromTop from "components/animations/fadeInFromTop";

function Resume() {
  const { msg } = useContext(ClientContext);

  return (
    <motion.div
      className="resume-animation-div"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: ["-400px", "0px"], opacity: [0, 1] }}
      style={{ width: "100%", backgroundColor: Colors.Black }}
    >
      <Box paddingTop="5em" m="auto" w="80%" display="block">
        <Box className="header-container" h="160px" w="100%">
          <Center className="header-center-box">
            <Yj indexPage={true} />
          </Center>
          <Center className="header-center-box" textAlign="center">
            <Titles text="João Vítor Basso Sberse" />
          </Center>
        </Box>
        <ImageAndButtons idString="outside-image" />
        <Box className="content-container-hp" w="100%">
          <Box gap={"15px"} className="content-container-child">
            <Skills />
          </Box>
          <Box className="content-container-child">
            <ImageAndButtons idString="inside-image" />
            <Box w="90%" m="0 auto">
              <Box w="100%">
                <Box m="10% 5%" w="90%">
                  {msg?.resume_text && (
                    <FadeInFromTop>
                      <Box
                        w="100%"
                        fontSize="1.125em"
                        fontFamily="var(--ubuntu)"
                        color={Colors.Gray}
                        minHeight="26vh"
                        textAlign="left"
                      >
                        <NormalText text={msg?.resume_text} />
                      </Box>
                    </FadeInFromTop>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

export default Resume; 
