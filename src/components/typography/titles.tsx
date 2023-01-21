import { Heading, ResponsiveValue } from "@chakra-ui/react";
import { jsx } from "@emotion/react";
import React, { Attributes } from "react";
import { ReactElement } from "react";
import { defaultText } from "../../../src/api/assset/types";

function Titles({ customFontSize = "40px", children }: defaultText) {
  return (
    <>
      <Heading
        _focus={{ outline: "none", boxShadow: "none" }}
        color="#D99E6A"
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