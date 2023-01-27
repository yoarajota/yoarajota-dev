import { Text } from "@chakra-ui/react";
import { Colors, defaultText } from "../../asset/types";

function NormalText({ customFontSize = "18px", customColor = Colors.Gray,children }: defaultText) {
  return (
    <Text color={customColor} fontSize={customFontSize} fontFamily="Ubuntu">
      {children}
    </Text>
  );
}

export default NormalText;
