import { Box, Text } from "@chakra-ui/react";
import { Colors } from "asset/enums";
import { defaultText } from "../../asset/types";

function NormalText({ customFontSize = "18px", customColor = Colors.Gray, children }: defaultText) {
  return (
    <Box color={customColor} fontSize={customFontSize} fontWeight='medium' letterSpacing='0.5' fontFamily="Ubuntu">
      {children}
    </Box>
  );
}

export default NormalText;
