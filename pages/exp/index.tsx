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
import Yj from "../../src/components/yj";
import { GiHamburgerMenu } from "react-icons/gi";
import Titles from "../../src/components/typography/titles";
import Timeline from "../../src/components/timeline";
import Normaltext from "../../src/components/typography/normaltext";
import api from "../../src/api/axios";
import { useQuery } from "react-query";
import TextAnimation from "../../src/components/animations/textanimation";
import { Info } from "../../src/asset/types";

function Exp() {
  const { isLoading, data, error, refetch } = useQuery(
    "exp",
    () => {
      return api.get("http://localhost:3000/api/exp");
    },
    { staleTime: 1000 * 60 * 10, enabled: false }
  );

  const { isOpen, onToggle } = useDisclosure();
  const [info, setInfo] = useState<Info>({});
  const [isOn, setIsOn] = useState(false);

  return (
    <Box minHeight="100vh" w="100%" textAlign="center">
      <Box paddingTop="65px">
        <Titles>Experiência Profissional</Titles>
      </Box>
      <Box w="100%">
        <Box h="140px" w="100%">
          <Timeline data={data?.data.data} setInfo={setInfo} />
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
          <Normaltext customFontSize="28px">{info.time}</Normaltext>
        </Box>
      </Box>
    </Box>
  );
}

export default Exp;
