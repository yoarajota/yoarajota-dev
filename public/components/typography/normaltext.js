import { Text } from "@chakra-ui/react";

function Normaltext({ customFontSize, children }) {
  return (
      <Text color="#737373" fontSize={customFontSize ? customFontSize : '24px'} fontFamily="Ubuntu">
        {children}
      </Text>
  );
}

export default Normaltext;
