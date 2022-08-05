import { Box, Center, Slide, useDisclosure, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Yj from "../public/components/yj";
import { GiHamburgerMenu } from "react-icons/gi";
import Titles from "../public/components/typography/titles";
import Timeline from "../public/components/timeline";
import Normaltext from "../public/components/typography/normaltext";
import axios from "axios";

function Exp() {
  const { isOpen, onToggle } = useDisclosure();
  const [info, setInfo] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    onToggle();
  }, []);

  useEffect(() => {
    async function getData() {
      axios.get("http://localhost:8000/exp").then((response) => {
        setState(response.data.data);
      });
    }

    getData();
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

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
              <Titles customFontSize="30px">{state?.[info]?.title}</Titles>
            </Box>
            <div className="container-mediaquery-responsive-display">
              <Box className="box-text-child" w="100%" justifyContent="center">
                <Normaltext>{state?.[info]?.text1}</Normaltext>
              </Box>
              <Box m="0 15px" w="100%" justifyContent="center">
                <Normaltext>{state?.[info]?.text2}</Normaltext>
              </Box>
              <Box className="box-text-child" w="100%" justifyContent="center">
                <Normaltext>{state?.[info]?.text3}</Normaltext>
              </Box>
            </div>
            <Box>
              <Normaltext customFontSize="28px">
                {state?.[info]?.time}
              </Normaltext>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Exp;
