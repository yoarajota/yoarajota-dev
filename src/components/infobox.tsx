import { Box, Center, Stat, StatLabel } from "@chakra-ui/react";
import { GrReactjs } from "react-icons/gr";
import { motion } from "framer-motion";

function InfoBox() {
  return (
    <motion.div
      className="item"
      drag
      onDragEnd={(event, info) => {
        // if (
        //   info.point.x > window.innerWidth * 0.8 &&
        //   info.point.y > window.innerHeight * 0.9
        // )
        //   handleInfo();
      }}
    >
      <Box>
        <Stat textAlign="center" color="#61dafb">
          <Center>
            <GrReactjs size="54" />
          </Center>
          <StatLabel fontSize="1.5em">React JS</StatLabel>
        </Stat>
      </Box>
    </motion.div>
  );
}

export default InfoBox;
