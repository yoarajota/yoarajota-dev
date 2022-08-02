import { Box, Center, Slide, useDisclosure, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Yj from "../public/components/yj";
import { GiHamburgerMenu } from "react-icons/gi";
import Titles from "../public/components/titles";
import Timeline from "../public/components/timeline";

function Exp() {
  const { isOpen, onToggle } = useDisclosure();
  const route = useRouter();
  const [innerWidth, setInnerWidth] = useState("");
  const [info, setInfo] = useState("");

  useEffect(() => {
    setInnerWidth(parseInt(window.innerWidth * 0.8));

    setTimeout(() => {
      onToggle();
      window.addEventListener("scroll", (event) => {
        onToggle();
        route.push("/homepage");
      });
    }, 1000);
  }, []);

  return (
    <>
      <Box vh="121vh">
        <Slide in={isOpen} direction="top">
          <Box h="100%">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
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
                <div className="container-mediaquery-responsive-display">
                  <Box m="0 15px">
                    <Text className="box-text-child">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin congue et eros non placerat. Curabitur lacinia, est
                      in semper interdum, turpis libero egestas mi, a lobortis
                      augue odio at eros. Sed lobortis odio vel mollis molestie.
                      Proin blandit rhoncus massa ultrices ultrices. Ut eu massa
                      at nunc dignissim feugiat. Etiam varius dolor non risus
                      pellentesque laoreet.
                    </Text>
                  </Box>
                  <Box m="0 15px">
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin congue et eros non placerat. Curabitur lacinia, est
                      in semper interdum, turpis libero egestas mi, a lobortis
                      augue odio at eros. Sed lobortis odio vel mollis molestie.
                      Proin blandit rhoncus massa ultrices ultrices. Ut eu massa
                      at nunc dignissim feugiat. Etiam varius dolor non risus
                      pellentesque laoreet.
                    </Text>
                  </Box>
                  <Box m="0 15px">
                    <Text className="box-text-child">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin congue et eros non placerat. Curabitur lacinia, est
                      in semper interdum, turpis libero egestas mi, a lobortis
                      augue odio at eros. Sed lobortis odio vel mollis molestie.
                      Proin blandit rhoncus massa ultrices ultrices. Ut eu massa
                      at nunc dignissim feugiat. Etiam varius dolor non risus
                      pellentesque laoreet.
                    </Text>
                  </Box>
                </div>
              </Box>
            </Box>
          </Box>
        </Slide>
      </Box>

      <style jsx global>
        {`
          body {
            margin: 0;
            background-color: #0d0d0d;
          }
        `}
      </style>
    </>
  );
}

export default Exp;
