import { Box, Center, Image } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Colors } from "../../asset/types";
import Skills from "../../components/skills";
import NormalText from "../../components/typography/normaltext";
import Titles from "../../components/typography/titles";
import Yj from "../../components/yj";

function Resume() {
    return (
      <Box backgroundColor={"#0D0D0D"} w="100%" minHeight="100vh">
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
                        Olá! 😁🌹 <br />
                        Sou o João Vítor Basso Sberse, tenho 19 anos e sou
                        desenvolvedor. <br /> <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius ligula in iaculis facilisis. Nulla
                        non magna ornare dolor tempor varius et sed augue. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum rutrum placerat ante a ullamcorper. Sed
                        commodo ante lorem, non bibendum sem molestie in.
                        Quisque et libero vitae nisi convallis efficitur sed a
                        eros. Curabitur vehicula laoreet lacinia.
                      </NormalText>
                    </Box>
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