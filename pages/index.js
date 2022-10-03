import {
  Box,
  Center,
  Heading,
  Image,
  Slide,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Skills from "../public/components/skills";
import Titles from "../public/components/typography/titles";
import Yj from "../public/components/yj";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Normaltext from "../public/components/typography/normaltext";

export default function Home() {
  const { isOpen, onToggle } = useDisclosure();
  const route = useRouter();

  useEffect(() => {
    onToggle();
  }, []);

  return (
    <>
      <Box minHeight="100vh">
        <Box backgroundColor={"#0D0D0D"} w="100%">
          <Box paddingTop="5em" m="auto" w="100%" display="block">
            <Box className="header-container" h="160px" w="100%">
              <Center className="header-center-box">
                <Yj indexPage={true}/>
              </Center>
              <Center className="header-center-box" textAlign="center">
                <Titles>João Vítor Basso Sberse</Titles>
              </Center>
              <Center className="header-center-box">
                <Image
                  src={"images/me.jpg"}
                  w="200px"
                  borderRadius="999px"
                  border="4px solid #4B4453"
                />
              </Center>
            </Box>
            <Box paddingTop="2em" className="content-container-hp" w="100%">
              <Center className="content-container-child">
                <Skills />
              </Center>
              <Center className="content-container-child">
                <Box w="90%" m="0 auto">
                  <Box w="70%" m="0 auto">
                    <Box textAlign="center" w="100%">
                      <Center m="0 auto" w="100%">
                        <AiOutlineInfoCircle size="40" fill="#737373" />
                      </Center>
                      <Box
                        w="100%"
                        fontSize="24px"
                        fontFamily="Ubuntu"
                        color="#737373"
                        textAlign="left"
                      >
                        <Normaltext>
                          Olá! 😁🌹 <br />
                          Sou o João Vítor Basso Sberse, tenho 19 anos e sou
                          desenvolvedor. <br /> <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius ligula in iaculis
                          facilisis. Nulla non magna ornare dolor tempor
                          varius et sed augue. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Vestibulum rutrum
                          placerat ante a ullamcorper. Sed commodo ante lorem,
                          non bibendum sem molestie in. Quisque et libero
                          vitae nisi convallis efficitur sed a eros. Curabitur
                          vehicula laoreet lacinia.
                        </Normaltext>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Center>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
