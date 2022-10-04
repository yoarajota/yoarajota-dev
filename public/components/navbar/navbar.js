import {
  Box,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Center,
  Link,
} from "@chakra-ui/react";
import axios from "axios";
import { useQuery } from "react-query";
import { GiHamburgerMenu } from "react-icons/gi";
import Yj from "../yj";
import Titles from "../typography/titles";
import HoverText from "../animations/hovertext";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { route } from "next/dist/server/router";
import ModalNavBar from "./modalnavbar";
import { useState } from "react";

function Navbar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalOpen, setModalOpen] = useState();
  const router = useRouter();

  const { isLoading, data } = useQuery(
    "nav",
    () => {
      return axios.get("http://localhost:8000/menu");
    },
    { staleTime: 1000 * 60 * 10 }
  );

  return (
    <>
      <Box
        position="fixed"
        zIndex="4"
        alignItems={"center"}
        justifyContent={"space-between"}
        display={router.pathname === "/" ? 'none' : "flex"}
        w={"100%"}
      >
        <Box m="20px">
          <GiHamburgerMenu size="40" color="#D99E6A" onClick={onOpen} />
        </Box>
        <Box onClick={() => {setModalOpen(true)}} m="20px">
          <Yj />
        </Box>
      </Box>

      <Drawer
        backgroundColor="#0d0d0d"
        opacity="1"
        placement="left"
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="#0d0d0d" opacity="1">
          <DrawerBody backgroundColor="#0d0d0d">
            <Center display="block">
              <Box textAlign="center" marginBottom="20px">
                <Yj />
              </Box>
              {data?.data.menu?.map((item) => {
                return (
                  <HoverText>
                    <Titles customFontSize="30">
                      <NextLink
                        style={{ textDecoration: "none", outline: "none" }}
                        href={item.link}
                      >
                        {item.title}
                      </NextLink>
                    </Titles>
                  </HoverText>
                );
              })}
            </Center>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <ModalNavBar active={modalOpen} setActive={setModalOpen}/>
    </>
  );
}

export default Navbar;
