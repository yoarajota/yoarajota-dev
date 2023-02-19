import { Box, Button, Center, Image } from "@chakra-ui/react";
import { Colors } from "asset/enums";
import { LanguageContext } from "components/contexts/language";
import { useCallback, useContext } from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";
import Skills from "../../components/skills";
import Titles from "../../components/typography/titles";
import Yj from "../../components/yj";
import DOMPurify from 'isomorphic-dompurify';
import api from "../../api/axios";
import NormalText from "components/typography/normaltext";
import { motion } from "framer-motion";

function Resume() {
  const { msg } = useContext(LanguageContext);
  const handleDownload = useCallback(() => {
    api.get('http://localhost:3000/api/download', { responseType: "blob" }).then((response) => {
      const file = new Blob([response.data], { type: "application/pdf" });
      const fileURL = URL.createObjectURL(file);

      var fileLink = document.createElement('a');
      fileLink.href = fileURL;
      fileLink.download = 'Currículo João Vítor Basso Sberse';
      fileLink.click();
      fileLink.remove();
    })
  }, [])

  return (
    <motion.div
      animate={{ y: ["-400px", "0px"], opacity: [0, 1] }}
      style={{ width: "100%", backgroundColor: Colors.Black }}
    >
      <Box paddingTop="5em" m="auto" w="90%" display="block">
        <Box className="header-container" h="160px" w="100%">
          <Center className="header-center-box">
            <Yj indexPage={true} />
          </Center>
          <Center className="header-center-box" textAlign="center">
            <Titles>João Vítor Basso Sberse</Titles>
          </Center>
          <Center className="header-center-box">
            <Image
              alt="picture of João Vítor Sberse"
              src={"images/me.jpg"}
              w="200px"
              borderRadius="999px"
              border="4px solid #4B4453"
            />
          </Center>
        </Box>
        <Box className="content-container-hp" w="100%">
          <Box gap={'15px'} className="content-container-child">
            <Skills />
          </Box>
          <Center className="content-container-child">
            <Box w="90%" m="0 auto">
              <Box w="85%">
                <Box textAlign="center" m="10% 0" w="100%">
                  {msg?.resume_text && (
                    <>
                      <Box
                        w="80%"
                        fontSize="1.125em"
                        fontFamily="Ubuntu"
                        color={Colors.Gray}
                        // textAlign="center"
                        minHeight="26vh"
                        textAlign="left"
                      >
                        <NormalText>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(msg?.resume_text),
                            }}
                          />
                        </NormalText>
                      </Box>
                      <Box
                        marginTop="5rem"
                        gap={"6rem"}
                        display="flex"
                        justifyContent="center"
                      >
                        <Button
                          onClick={() => {
                            handleDownload();
                          }}
                          bg="transparent"
                          color={Colors.Gray}
                          lineHeight="0"
                          _active={{ bg: "" }}
                          _hover={{ bg: "" }}
                          gap="9px"
                        >
                          <AiOutlineFilePdf size={"2em"} />
                          <NormalText customFontSize="1em">
                            Download Resume
                          </NormalText>
                        </Button>
                        <Button
                          onClick={() => {
                            handleDownload();
                          }}
                          bg="transparent"
                          color={Colors.Gray}
                          lineHeight="0"
                          _active={{ bg: "" }}
                          _hover={{ bg: "" }}
                          gap="9px"
                        >
                          <SiLinkedin size={"1.7em"} color={Colors.Gray} />
                          <NormalText customFontSize="1em">
                            Linkedin Profile
                          </NormalText>
                        </Button>
                      </Box>
                    </>
                  )}
                </Box>
              </Box>
            </Box>
          </Center>
        </Box>
      </Box>
    </motion.div>
  );
}

export default Resume;