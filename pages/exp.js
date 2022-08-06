import { Box, Center, Slide, useDisclosure, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
import Yj from "../public/components/yj";
import { GiHamburgerMenu } from "react-icons/gi";
import Titles from "../public/components/typography/titles";
import Timeline from "../public/components/timeline";
import Normaltext from "../public/components/typography/normaltext";
import axios from "axios";
import { useQuery } from "react-query";

function Exp() {
  const { isOpen, onToggle } = useDisclosure();
  const [info, setInfo] = useState("carrer_information_2");
  const [state, setState] = useState("");

  const { isLoading, data } = useQuery(
    "exp",
    () => {
      return axios.get("http://localhost:8000/exp");
    },
    {staleTime: 1000 * 60 * 10,}
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

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
              <Titles customFontSize="30px">{data?.data[info]?.title}</Titles>
            </Box>
            <div className="container-mediaquery-responsive-display">
              <Box className="box-text-child" w="100%" justifyContent="center">
                <Normaltext>{data?.data[info]?.text1}</Normaltext>
              </Box>
              <Box m="0 15px" w="100%" justifyContent="center">
                <Normaltext>{data?.data[info]?.text2}</Normaltext>
              </Box>
              <Box className="box-text-child" w="100%" justifyContent="center">
                <Normaltext>{data?.data[info]?.text3}</Normaltext>
              </Box>
            </div>
            <Box>
              <Normaltext customFontSize="28px">
                {data?.data[info]?.time}
              </Normaltext>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Exp;
