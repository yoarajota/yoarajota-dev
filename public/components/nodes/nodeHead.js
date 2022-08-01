import { Box, Text, Image } from "@chakra-ui/react";
import Levelers from "../levelers";

function NodeHead({ img, lvl, xp, children }) {
  console.log(img);

  return (
    <Box
      m="0"
      borderRadius="8px"
      minWidth="220px"
      minHeight="220px"
      textAlign="center"
    >
      <Text m="0" p="5px" fontFamily="Ubuntu" fontSize="24px" color="#D99E6A">
        {children[0]}
      </Text>
        {children[1]}
      <Levelers xp={xp ? xp : ""} lvl={lvl ? lvl : ""} />
    </Box>
  );
}

export default NodeHead;
