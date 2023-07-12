import { Box, HStack, SimpleGrid } from "@chakra-ui/react";
import Cards from "components/cards";
import { ClientContext } from "components/contexts/client";
import Titles from "components/typography/titles";
import _ from "lodash";
import { useContext, useEffect, useState } from "react";
import { stateStorage } from "react-trigger-state";
import { AnimatePresence, motion } from "framer-motion";
import FadeInFromTop from "components/animations/fadeInFromTop";
import FadeInContainer from "components/animations/fadeInContainer";
import { endProp } from "asset/types";

function Interest({ end }: endProp) {
  const {
    msg,
    innerWidth,
    systemConfig: {
      interests: { h, showCards },
    },
  } = useContext(ClientContext);
  const [willShowCards, setWillShowCards] = useState<boolean>(false);
  const scrollYProgress = stateStorage.get("scrollYProgress");

  useEffect(() => {
    scrollYProgress.onChange((hookedYPosition: number) => {
      if ((hookedYPosition ?? 0) < showCards) {
        setWillShowCards(false);
      } else if ((hookedYPosition ?? 0) > showCards && !willShowCards) {
        setWillShowCards(true);
      }
    });
  }, [scrollYProgress, willShowCards]);

  return (
    <Box w="100%" textAlign="center">
      <Box paddingTop="85px">
        <FadeInContainer end={(end ?? 0) + 1}>
          <Titles text={msg?.interest_title} />
        </FadeInContainer>
      </Box>
      <SimpleGrid
        columns={innerWidth < 768 ? [1, 1, 1] : [2, 2, 2]}
        justifyContent="center"
        spacing={7}
        w="65%"
        m="3em auto 0 auto"
        h={h}
      >
        <AnimatePresence exitBeforeEnter>
          {willShowCards && [1, 2, 3, 4].map((i, k) => (
            <FadeInFromTop delay={k * 0.15} key={_.uniqueId('card-interests-')}>
              <Cards
                size="sm"
                title="Save Money"
                desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
              />
            </FadeInFromTop>
          ))}
        </AnimatePresence >
      </SimpleGrid>
    </Box >
  );
}
export default Interest;