import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Levelers as LevelersType } from "asset/types"; // Assuming this import is correctly defined
import { motion } from "framer-motion";

function Levelers({
  xp,
  lvl,
  title,
  index,
  extraDelay = 0
}: LevelersType): JSX.Element {
  const xpResult = xp * 36;
  const lvlResult = lvl * 36;

  const barVariants = {
    initial: { display: "none" },
    animate: { display: "block", width: xpResult }
  };

  const lvlBarVariants = {
    initial: { display: "none" },
    animate: { display: "block", width: lvlResult }
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
          initial="initial"
          animate="animate"
          variants={barVariants}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="ll"
        />
        <motion.div
          initial="initial"
          animate="animate"
          variants={lvlBarVariants}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="ll second-level"
        />
        <Box zIndex="3" w="180px" position="absolute" h="25px" display="flex">
          {[1, 2, 3, 4, 5].map((number) => (
            <Box key={number} className="lfs"></Box>
          ))}
        </Box>
        <Box className="lf">
          {[1, 2, 3, 4, 5].map((number) => (
            <Box key={number} className="lfs geral-text2">
              {number}
            </Box>
          ))}
        </Box>
      </Box>
    </motion.div>
  );
}

export default Levelers;
