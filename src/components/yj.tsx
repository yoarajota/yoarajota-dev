import { Box, Heading, Image } from "@chakra-ui/react";
import PulseAnimation from "./animations/pulseAnimation";
import { yjLogotipo } from "../asset/types";
import { Colors } from "asset/enums";
import RainbowAnimation from "./animations/rainbowAnimation";
import { memo } from "react";

function Yj({ otherColor, indexPage }: yjLogotipo) {
  return (
    <Heading
      m="0px"
      color={otherColor ? otherColor : Colors.Orange}
      fontFamily="var(-unifrakturCook)"
      className="yj-logo"
      fontSize="48px"
    >
      <Box display="flex">
        {"< " + "Y" + "J"}
        {indexPage ? (
          <PulseAnimation>
            <RainbowAnimation>{" " + " >"} </RainbowAnimation>
          </PulseAnimation>
        ) : (
          <PulseAnimation>{" " + " >"} </PulseAnimation>
        )}
      </Box>
    </Heading>
  );
}

export default memo(Yj);
