import { Box, Heading, Image } from "@chakra-ui/react";
import PulseAnimation from "./animations/pulseAnimation";
import NextLink from "next/link";
import RainbowAnimation from "./animations/rainbowanimation";
import { yjLogotipo } from "../asset/types";


function Yj({ otherColor, indexPage }: yjLogotipo) {
  return (
    <>
      <Heading
        m="0px"
        color={otherColor ? otherColor : "#D99E6A"}
        fontFamily="UnifrakturCook"
        className="yj-logo"
        fontSize="48px"
      >
        <Box display='flex'>
          {'< ' + 'Y' + 'J'}
          {indexPage ?
            <NextLink
              style={{ textDecoration: "none" }}
              href='/tec'><button>
                <PulseAnimation><RainbowAnimation >{' ' + ' >'} </RainbowAnimation></PulseAnimation>
              </button>
            </NextLink>
            :
            <PulseAnimation>{' ' + ' >'} </PulseAnimation>
          }
        </Box>

      </Heading>

      {/* <Image src='images/YJ.png' width='63px' /> */}
    </>
  );
}

export default Yj;
