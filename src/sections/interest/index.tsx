import { Box, HStack, SimpleGrid } from "@chakra-ui/react";
import Cards from "components/cards";
import { ClientContext } from "components/contexts/client";
import Titles from "components/typography/titles";
import _ from "lodash";
import { useContext } from "react";

function Interest() {
    const { msg, innerWidth } = useContext(ClientContext);

    return (
      <Box w="100%" textAlign="center">
        <Box paddingTop="85px">
          <Titles text={msg?.interest_title} />
        </Box>
        <Box>
          <SimpleGrid
            columns={innerWidth < 768 ? [1, 1, 1] : [2, 2, 2]}
            justifyContent="center"
            spacing={1}
            w="65%"
            m="0 auto"
          >
            {[1, 2, 3, 4].map(() => (
              <Cards
                key={_.uniqueId()}
                size="sm"
                title="Save Money"
                desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
              />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    );
}
export default Interest;