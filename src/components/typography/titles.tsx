import { Heading } from "@chakra-ui/react";
import { Colors } from "asset/enums";
import React from "react";
import { defaultText } from "../../asset/types";

function Titles({ size = "bg", text }: defaultText) {
  return (
    <Heading
      className={`title-${size}`}
      _focus={{ outline: "none", boxShadow: "none" }}
      color={Colors.Orange}
      fontFamily="var(--ubuntu)"
      m="0px"
    >
      {text}
    </Heading>
  );
}

export default Titles;
