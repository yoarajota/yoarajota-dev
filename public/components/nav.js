import { Box, Text } from "@chakra-ui/react";
import { useScroll, motion } from "framer-motion";
import { useEffect } from "react";

const Nav = () => {
  return (
    <>
      <Box
        position="fixed"
        zIndex="4"
        alignItems={"center"}
        justifyContent={"space-between"}
        display={"flex"}
        w={"100%"}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box m="20px">
            <GiHamburgerMenu size="40" color="#D99E6A" />
          </Box>
          <Box m="20px">
            <Yj />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Nav;
