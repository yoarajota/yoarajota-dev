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
        <Slide in={isOpen} direction="top">
          <Box backgroundColor={"#0D0D0D"} w="100%" minWidth="100vh">
            <Box paddingTop="5em" m="auto" w="100%" display="block">
              <Box display="flex" h="160px" w="100%">
                <Center w="33.33333333%">
                  <Yj />
                </Center>
                <Center w="33.33333333%">
                  <Titles>João Vítor Basso Sberse</Titles>
                </Center>
                <Center w="33.33333333%">
                  <Image
                    src={"images/me.jpg"}
                    w="200px"
                    borderRadius="999px"
                    border="4px solid #4B4453"
                  />
                </Center>
              </Box>
              <Box paddingTop="2em" display="flex" w="100%">
                <Center w="33.33333333%">
                  <Skills />
                </Center>
                <Center w="66.666666666%">
                  <Box w="90%">
                    <Box w="70%">
                      <Box textAlign="center" w="100%">
                        <AiOutlineInfoCircle size="40" fill="#737373" />
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
        </Slide>
      </Box>
    </>
  );
}
