import { Box } from "@chakra-ui/react";
import { Colors } from "asset/enums";
import { linkText } from "../../asset/types";

function LinkText({ customFontSize = "1.125rem", customColor = Colors.Gray, functions = {}, link, children }: linkText) {
  return (
    <Box color={customColor} {...functions} fontSize={customFontSize} fontWeight='thin' letterSpacing='0.15px' fontFamily="Ubuntu" fontStyle='italic'>
      <a target='_blank' rel="noreferrer" href={link}>
        {children}
      </a>
    </Box>
  );
}

export default LinkText;
