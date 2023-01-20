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
      <Text m="0" p="5px" fontFamily="Ubuntu" fontSize="26px" color="#D99E6A">
        {children[0]}
      </Text>
      <Box m="10px 0" w="100%" justifyContent="center">
        {children[1]}
      </Box>
      <Levelers xp={xp ? xp : ""} lvl={lvl ? lvl : ""} />
    </Box>
  );
}

export default NodeHead;
