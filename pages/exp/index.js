import {
  Box,
  Center,
  Slide,
  useDisclosure,
  Text,
  background,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
import Yj from "../../public/components/yj";
import { GiHamburgerMenu } from "react-icons/gi";
import Titles from "../../public/components/typography/titles";
import Timeline from "../../public/components/timeline";
import Normaltext from "../../public/components/typography/normaltext";
import axios from "axios";
import { useQuery } from "react-query";
import SlideFromLeft from "../../public/components/animations/slideleft";
import HoverText from "../../public/components/animations/hovertext";
import TextAnimation from "../../public/components/animations/textanimation";

function Exp() {
  const { isOpen, onToggle } = useDisclosure();
  const [info, setInfo] = useState("carrer_information_2");
  const [isOn, setIsOn] = useState(false);

  const { isLoading, data } = useQuery(
    "exp",
    () => {
      return axios.get("http://localhost:8000/exp");
    },
    { staleTime: 1000 * 60 * 10 }
  );

  return (
    <>
      <Box minHeight="100vh">
        <Box w="100%" textAlign="center">
          <Box paddingTop="65px">
            <Titles>Experiência Profissional</Titles>
          </Box>
          <Box w="100%">
            <Box h="140px" w="100%">
              <Timeline data={data?.data.career} setInfo={setInfo} />
            </Box>
            <Box m="0 0 50px 0">
              <TextAnimation customFontSize="30px" title text={info.title} />
            </Box>
            <div className="container-mediaquery-responsive-display">
              <Box className="box-text-child" w="100%" justifyContent="center">
                <TextAnimation text={info.text1} />
              </Box>
              <Box m="0 15px" w="100%" justifyContent="center">
                <TextAnimation text={info.text2} />
              </Box>
              <Box className="box-text-child" w="100%" justifyContent="center">
                <TextAnimation text={info.text3} />
              </Box>
            </div>
            <Box position="sticky" bottom="0" w="100%" justifyContent="center">
              <Box
                w="100%"
                h="100%"
                filter="blur(4px)"
                opacity="0.8"
                backgroundColor="#0d0d0d"
                zIndex={-1}
                position="absolute"
              ></Box>
              <Normaltext marginTop='20px' customFontSize="28px" position="relative">
                {info.time}
              </Normaltext>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Exp;
