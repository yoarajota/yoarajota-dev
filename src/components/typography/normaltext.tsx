import { Box, Text } from "@chakra-ui/react";
import { Colors } from "asset/enums";
import { defaultText } from "../../asset/types";

function NormalText({ customFontSize = "1.125rem", customColor = Colors.Gray, functions = {}, children }: defaultText) {
  return (
    <Box color={customColor} {...functions} fontSize={customFontSize} fontWeight='medium' letterSpacing='0.25px' fontFamily="Ubuntu">
      {children}
    </Box>
  );
}

export default NormalText;
