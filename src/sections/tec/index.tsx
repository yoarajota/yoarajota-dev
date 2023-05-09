import { Box } from "@chakra-ui/react";
import Nodes from "../../components/nodes";
import Titles from "../../components/typography/titles";
import { ClientContext } from "components/contexts/client";
import { useContext } from "react";

function Tec() {
  const { msg } = useContext(ClientContext);

  return (
    <Box w="100%" paddingTop="5em" textAlign="center">
      <Titles text={msg.tec_title} />
      <Box w="100%" flexDirection="column" display="flex">
        <Box
          position="relative"
          h="200vh"
          m="0 auto"
          width="70%"
        >
          <Nodes />
        </Box>
      </Box>
    </Box>
  );
}

export default Tec;
