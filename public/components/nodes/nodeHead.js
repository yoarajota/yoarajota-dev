import { Box, Text, Image } from "@chakra-ui/react";
import Levelers from "../levelers";

function NodeHead({ img, lvl, xp, children }) {

    return (
        <Box m='0' borderRadius='8px' minWidth='220px' minHeight='220px' textAlign='center'>
            <Text m='0' p='5px' fontFamily='Ubuntu' fontSize='24px' color='#D99E6A'>
                {children}
            </Text>
            <Image src={img ? img : ''} maxWidth='270px'/>
            <Levelers xp={xp ? xp : ''} lvl={lvl ? lvl : ''} />
        </Box>
    );
}

export default NodeHead;