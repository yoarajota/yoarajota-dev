import { Box, Center, Image } from "@chakra-ui/react";
import { Colors } from "asset/enums";
import { ClientContext } from "components/contexts/client";
import { useContext } from "react";
import Skills from "../../components/skills";
import Titles from "../../components/typography/titles";
import Yj from "../../components/yj";
import DOMPurify from "isomorphic-dompurify";
import NormalText from "components/typography/normaltext";
import { motion } from "framer-motion";
import ImageAndButtons from "components/imageAndButtons";

function Resume() {
  const { msg } = useContext(ClientContext);

  return (
    <motion.div
      animate={{ y: ["-400px", "0px"], opacity: [0, 1] }}
      style={{ width: "100%", backgroundColor: Colors.Black }}
    >
      <Box paddingTop="5em" m="auto" w="80%" display="block">
        <Box className="header-container" h="160px" w="100%">
          <Center className="header-center-box">
            <Yj indexPage={true} />
          </Center>
          <Center className="header-center-box" textAlign="center">
            <Titles>João Vítor Basso Sberse</Titles>
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
                    <>
                      <Box
                        w="100%"
                        fontSize="1.125em"
                        fontFamily="Ubuntu"
                        color={Colors.Gray}
                        // textAlign="center"
                        minHeight="26vh"
                        textAlign="left"
                      >
                        <NormalText text={msg?.resume_text} />
                      </Box>
                    </>
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
