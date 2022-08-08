import { Heading, Image } from "@chakra-ui/react";

function Yj({ otherColor }) {
  return (
    <>
      <Heading
        m="0px"
        color={otherColor ? otherColor : "#D99E6A"}
        fontFamily="UnifrakturCook"
        className="yj-logo"
        fontSize="48px"
      >
        YJ
      </Heading>

      {/* <Image src='images/YJ.png' width='63px' /> */}
    </>
  );
}

export default Yj;
