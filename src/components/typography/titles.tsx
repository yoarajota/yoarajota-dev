import { Heading, ResponsiveValue } from "@chakra-ui/react";
import { Colors } from "asset/enums";
import React from "react";
import { defaultText } from "../../asset/types";

function Titles({ customFontSize = "40px", children }: defaultText) {
  return (
    <>
      <Heading
        _focus={{ outline: "none", boxShadow: "none" }}
        color={Colors.Orange}
        fontSize={customFontSize}
        fontFamily="Ubuntu"
        m="0px"
      >
        {children}
      </Heading>
    </>
  );
}

export default Titles;
