import { Box, Text } from "@chakra-ui/react";
import { Levelers } from "asset/types";
import { motion } from "framer-motion";

function Levelers({ xp, lvl, title, index, extraDelay = 0 }: Levelers) {
  const xpResult = xp * 36;
  const lvlResult = lvl * 36;

  const variants = {
    i: {
      display: "none",
    },

    a: {
      display: "block",
      width: xpResult,
    },
  };

  const variants2 = {
    i: {
      display: "none",
    },

    a: {
      display: "block",
      width: lvlResult,
    },
  };

  return (
    <motion.div
      style={{ maxWidth: "180px", margin: "0 auto" }}
      animate={title ? { x: ["-120px", "0px"], opacity: [0, 1] } : {}}
      transition={{ delay: (index + extraDelay) / 8, ease: "circOut" }}
    >
      <Text
        fontFamily="var(--prompt)"
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
        <Box zIndex="3" w="180px" position="absolute" h="25px" display="flex">
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
    </motion.div>
  );
}

export default Levelers;
