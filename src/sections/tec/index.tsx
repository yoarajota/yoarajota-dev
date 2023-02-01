import { Box } from "@chakra-ui/react";
import Nodes from "../../components/nodes";
import Titles from "../../components/typography/titles";

function Tec() {
  return (
    <>
      <Box w="100%" paddingTop="5em" textAlign="center">
        <Titles>Principais Tecnologias</Titles>
        <Box w="100%" flexDirection='column' display='flex'>
          {[1, 2].map((i) => (<Box
            position="relative"
            h="100vh"
            m="0 auto"
            width="70%"
          >
            <Nodes tech={i} />
          </Box>))}
        </Box>
      </Box>
    </>
  );
}

export default Tec;
