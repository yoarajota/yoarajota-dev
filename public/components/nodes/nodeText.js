import { Box, Text } from "@chakra-ui/react";

function NodeText({ children }) {
    return (
        <Box m='0' border='4px solid #4B4453' borderRadius='8px' background='#0D0D0D' minWidth='260px'>
            <Text m='0' p='5px' fontFamily='Ubuntu' fontSize='24px' color='#D99E6A'>
                {children}
            </Text>
        </Box>
    );
}

export default NodeText;