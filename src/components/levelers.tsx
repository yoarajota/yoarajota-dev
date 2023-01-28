import { Center, Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Levelers } from "../../src/api/assset/types";

function Levelers(props: Levelers) {
  const xp = props.xp * 36;
  const lvl = props.lvl * 67.5;
  const title = props.title;

  const variants = {
    i: {
      width: 0,
      display: "none",
    },

    a: {
      display: "block",
      width: xp ?? lvl,
    },

    a2: {
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
          <Box
            zIndex={3}
            w="180px"
            backgroundColor="transaperent"
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
