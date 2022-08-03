import { Heading } from "@chakra-ui/react";

function Titles({ customFontSize, children }) {
  return (
    <>
      <Heading
        color="#D99E6A"
        fontSize={customFontSize ? customFontSize : "48px"}
        fontFamily="Ubuntu"
        m="0px"
      >
        {children}
      </Heading>
    </>
  );
}

export default Titles;
