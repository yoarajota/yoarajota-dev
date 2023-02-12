import { Box, Center, Image } from "@chakra-ui/react";
import { Colors } from "asset/enums";
import { LanguageContext } from "components/contexts/language";
import { useContext } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Skills from "../../components/skills";
import NormalText from "../../components/typography/normaltext";
import Titles from "../../components/typography/titles";
import Yj from "../../components/yj";
import DOMPurify from 'isomorphic-dompurify';

function Resume() {
  const { msg } = useContext(LanguageContext); 

    return (
      <Box backgroundColor={"#0D0D0D"} w="100%">
        <Box paddingTop="5em" m="auto" w="100%" display="block">
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
            <Center className="content-container-child">
              <Skills />
            </Center>
            <Center className="content-container-child">
              <Box w="90%" m="0 auto">
                <Box w="85%">
                  <Box textAlign="center" w="100%">
                    {msg?.resume_text && (
                      <>
                        <Center m="0 auto" w="100%">
                          <AiOutlineInfoCircle size="40" fill={Colors.Gray} />
                        </Center>
                        <Box
                          w="100%"
                          fontSize="18px"
                          fontFamily="Ubuntu"
                          color={Colors.Gray}
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
                      </>
                    )}
                  </Box>
                </Box>
              </Box>
            </Center>
          </Box>
        </Box>
      </Box>
    );
}

export default Resume;