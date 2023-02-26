import { Heading, ResponsiveValue } from "@chakra-ui/react";
import { Colors } from "asset/enums";
import React from "react";
import { defaultText } from "../../asset/types";

function Titles({ size = 'bg', children }: defaultText) {
  return (
    <>
      <Heading
        className={`title-${size}`}
        _focus={{ outline: "none", boxShadow: "none" }}
        color={Colors.Orange}
        fontFamily="Ubuntu"
        m="0px"
      >
        {children}
      </Heading>
    </>
  );
}

export default Titles;
