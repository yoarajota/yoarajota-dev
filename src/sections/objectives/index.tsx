import { Box, SimpleGrid } from "@chakra-ui/react";
import Cards from "components/cards";
import { ClientContext } from "components/contexts/client";
import Titles from "components/typography/titles";
import _ from "lodash";
import { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { stateStorage } from "react-trigger-state";
import FadeInFromTop from "components/animations/fadeInFromTop";
import FadeInContainer from "components/animations/fadeInContainer";
import { endProp } from "asset/types";

function Objectives({ end }: endProp) {
  const {
    msg,
    systemConfig: {
      objectives: { h },
    },
  } = useContext(ClientContext);
  const [showCards, setShowCards] = useState<boolean>(false);
  const scrollYProgress = stateStorage.get("scrollYProgress");
  useEffect(() => {
    scrollYProgress.onChange((hookedYPosition: number) => {
      if ((hookedYPosition ?? 0) < 0.78) {
        setShowCards(false);
      } else if ((hookedYPosition ?? 0) > 0.78 && !showCards) {
        setShowCards(true);
      }
    });
  }, [scrollYProgress, showCards]);

  return (
    <Box w="100%" textAlign="center" minH="40vh">
      <Box paddingTop="65px">
        <FadeInContainer end={(end ?? 0) + 1}>
          <Titles text={msg?.objectives_title} />
        </FadeInContainer>
      </Box>
      <SimpleGrid
        columns={[1, null, 3]}
        justifyContent="center"
        spacing={14}
        w="90%"
        m="3em auto 0 auto"
        h={h}
      >
        <AnimatePresence exitBeforeEnter>
          {showCards &&
            [1, 2, 3].map((i, k) => (
              <FadeInFromTop delay={k * 0.15} key={_.uniqueId("card-objectives-")}>
                <Cards
                  title="Save Money"
                  desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
                />
              </FadeInFromTop>
            ))}
        </AnimatePresence>
      </SimpleGrid>
    </Box>
  );
}
export default Objectives;
