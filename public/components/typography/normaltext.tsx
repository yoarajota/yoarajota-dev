import { Text } from "@chakra-ui/react";
import { defaultText } from "../../asset/types";

function NormalText({ customFontSize, children }: defaultText) {
  return (
    <Text color="#737373" fontSize={customFontSize ? customFontSize : '24px'} fontFamily="Ubuntu">
      {children}
    </Text>
  );
}

export default NormalText;
