import { Box, HStack, SimpleGrid } from "@chakra-ui/react";
import Cards from "components/cards";
import { ClientContext } from "components/contexts/client";
import Titles from "components/typography/titles";
import _ from "lodash";
import { useContext } from "react";

function Objectives() {
    const { msg } = useContext(ClientContext);

    return <Box w="100%" textAlign="center">
        <Box paddingTop="65px">
            <Titles text={msg?.objectives_title} />
        </Box>
        <Box>
            <SimpleGrid columns={[1, null, 3]} justifyContent='center' spacing={14} w="90%" m='0 auto'>
                {[1, 2, 3].map(() =>
                    <Cards
                        key={_.uniqueId()}
                        title='Save Money'
                        desc='You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process'
                    />
                )}
            </SimpleGrid>
        </Box>
    </Box>
}
export default Objectives;