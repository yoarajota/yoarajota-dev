import { Box, Text } from "@chakra-ui/react";
import { Levelers } from "asset/types";
import { motion } from "framer-motion";

function Levelers(props: Levelers) {
  const xp = props.xp * 36;
  const lvl = props.lvl * 36;
  const title = props.title;

  const variants = {
    i: {
      display: "none",
    },

    a: {
      display: "block",
      width: xp,
    },
  };

  const variants2 = {
    i: {
      display: "none",
    },

    a: {
      display: "block",
      width: lvl,
    },
  };

  return (
    <>
      <Box maxW={"180px"} m="0 auto">
        <Text
          fontFamily={"Prompt"}
          fontSize="16px"
          m="0px"
          className="geral-text"
        >
          {title}
        </Text>
        <Box marginBottom={"10px"}>
          <motion.div
            initial="i"
            animate="a"
            variants={variants}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="ll"
          />
          <motion.div
            initial="i"
            animate="a"
            variants={variants2}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="ll second-level"
          />
          <Box
            zIndex="3"
            w="180px"
            position="absolute"
            h="25px"
            display="flex"
          >
            <Box className="lfs"></Box>
            <Box className="lfs"></Box>
            <Box className="lfs"></Box>
            <Box className="lfs"></Box>
            <Box className="lfs"></Box>
          </Box>

          <Box className="lf">
            <Box className="lfs geral-text2"> 1</Box>
            <Box className="lfs geral-text2"> 2</Box>
            <Box className="lfs geral-text2"> 3</Box>
            <Box className="lfs geral-text2"> 4</Box>
            <Box className="lfs geral-text2"> 5</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Levelers;
