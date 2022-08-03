import { Box, Center, Slide, useDisclosure, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Yj from "../public/components/yj";
import { GiHamburgerMenu } from "react-icons/gi";
import Titles from "../public/components/typography/titles";
import Timeline from "../public/components/timeline";
import Normaltext from "../public/components/typography/normaltext";

function Exp() {
  const { isOpen, onToggle } = useDisclosure();
  const [info, setInfo] = useState("");

  useEffect(() => {
    onToggle();
  }, []);

  const fakedata = {
    carrer_information_1: {
      title: 'Includer Tecnologia',
      time: '04 22 - xx xx',
      text1: "aa",
      text2: "bb",
      text3: "cc",
    },
    carrer_information_2: {
      title: 'Vagabundo',
      time: '00 00 - xx xx',
      text1: "123123",
      text2: "1231",
      text3: "312312321",
    },
  };

  return (
    <>
      <Box minHeight="100vh">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box m="20px">
            <GiHamburgerMenu size="40" color="#D99E6A" />
          </Box>
          <Box m="20px">
            <Yj />
          </Box>
        </Box>
        <Box w="100%" textAlign="center">
          <Titles>Experiência Profissional</Titles>
          <Box w="100%">
            <Box h="20vh" w="100%">
              <Timeline setInfo={setInfo} />
            </Box>
            <Box m="0 0 50px 0">
              <Titles customFontSize="30px">{fakedata?.[info]?.title}</Titles>
            </Box>
            <div className="container-mediaquery-responsive-display">
              <Box className="box-text-child" w='100%' justifyContent='center'>
                <Normaltext>{fakedata?.[info]?.text1}</Normaltext>
              </Box>
              <Box m="0 15px" w='100%' justifyContent='center'>
                <Normaltext>{fakedata?.[info]?.text2}</Normaltext>
              </Box>
              <Box className="box-text-child" w='100%' justifyContent='center'>
                <Normaltext>{fakedata?.[info]?.text3}</Normaltext>
              </Box>
            </div>
            <Box>
              <Normaltext customFontSize="28px">{fakedata?.[info]?.time}</Normaltext>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Exp;
