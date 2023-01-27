import { Box } from "@chakra-ui/react";
import { Scrollbar } from "../asset/types";

function Scrollbar({ currentPosition }: Scrollbar) {

    return (
        <Box position={'fixed'} right={'15px'} h={'75vh'} m={'12.5vh 0'} w={'4px'} backgroundColor={'red'} zIndex={14}>
            <Box bg="">

            </Box>
        </Box>
    )
}

export default Scrollbar;