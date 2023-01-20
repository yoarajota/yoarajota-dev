import { Text } from "@chakra-ui/react";
import { defaultText } from "../../../src/api/assset/types";

function NormalText({ customFontSize = "18px", customColor = "#737373",children }: defaultText) {
  return (
    <Text color={customColor} fontSize={customFontSize} fontFamily="Ubuntu">
      {children}
    </Text>
  );
}

export default NormalText;
