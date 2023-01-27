import { Box, Center, Slide, useDisclosure, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Yj from "../../components/yj";
import { GiHamburgerMenu } from "react-icons/gi";
import Nodes from "../../components/nodes";
import NodeHead from "../../components/nodes/nodeHead";
import Titles from "../../components/typography/titles";
import axios from "axios";

function Tec() {
  const [offset, setOffset] = useState(0);
  const { isOpen, onToggle } = useDisclosure();
  const route = useRouter();
  const [innerWidth, setInnerWidth] = useState("");

  useEffect(() => {
    // async function getData() {
    //   axios.get("http://localhost:8000/tec").then((response) => {
    //   });
    // }
    // getData();
  }, []);

  useEffect(() => {
    onToggle();
  }, []);

  return (
    <>
      <Box minHeight="100vh">
        <Box w="100%" paddingTop="5em" textAlign="center">
          <Titles>Principais Tecnologias</Titles>
          <Center w="100%">
            <Box
              w={`${innerWidth}px`}
              position="relative"
              h="100vh"
              m="auto 0"
              width="70%"
            >
              <Box
                w="100%"
                h="2px"
                filter="blur(4px)"
                marginTop="-4px"
                zIndex={21}
                opacity="1"
                backgroundColor="#0d0d0d"
                position="absolute"
              ></Box>
              <Box
                w="100%"
                h="10px"
                filter="blur(4px)"
                marginTop="-4px"
                zIndex={20}
                backgroundColor="#0d0d0d"
                position="absolute"
              ></Box>
              <Nodes />
            </Box>
          </Center>
        </Box>
      </Box>
    </>
  );
}

export default Tec;
