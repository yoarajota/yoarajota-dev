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
import Yj from "../../components/yj";
import { GiHamburgerMenu } from "react-icons/gi";
import Titles from "../../components/typography/titles";
import Timeline from "../../components/timeline";
import Normaltext from "../../components/typography/normaltext";
import api from "../../api/axios";
import { useQuery } from "react-query";
import TextAnimation from "../../components/animations/textanimation";
import { ExpType, Info } from "../../asset/types";

function Exp({ callApi, scrollYProgress }: ExpType) {
  const { isLoading, data, error, refetch } = useQuery(
    "exp",
    () => {
      return api.get("http://localhost:3000/api/exp");
    },
    { staleTime: 1000 * 60 * 10, enabled: false }
  );

  const [info, setInfo] = useState<Info>({});
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (callApi && !fetched) {
      refetch().then((r) => {
        setFetched(true)
      })
    }
  }, [callApi])

  return (
    <Box minHeight="100vh" w="100%" textAlign="center">
      <Box paddingTop="65px">
        <Titles>Experiência Profissional</Titles>
      </Box>
      <Box w="100%">
        <Box h="140px" w="100%">
          <Timeline scrollYProgress={scrollYProgress} data={data?.data.data} setInfo={setInfo} />
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
