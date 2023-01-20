import { Box, Text } from "@chakra-ui/react";

function NodeText({ children, customFontSize, title }) {
    return (
        <Box m='0' border='2px solid #4B4453' borderRadius='8px' background='#0D0D0D' minWidth='260px'>
            <Text m='0' p='5px' fontFamily='Ubuntu' fontSize={customFontSize ? customFontSize : '24px'} color={title ? '#D99E6A' : '#4B4453'}>
                {children}
            </Text>
        </Box>
    );
}

export default NodeText;