import { Box, HStack, SimpleGrid } from "@chakra-ui/react";
import Cards from "components/cards";
import { ClientContext } from "components/contexts/client";
import Titles from "components/typography/titles";
import _ from "lodash";
import { useContext, useEffect, useState } from "react";
import { stateStorage } from "react-trigger-state";
import { AnimatePresence, motion } from "framer-motion";

function Interest() {
  const { msg, innerWidth } = useContext(ClientContext);
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
    <Box w="100%" textAlign="center">
      <Box paddingTop="85px">
        <Titles text={msg?.interest_title} />
      </Box>
      <SimpleGrid
        columns={innerWidth < 768 ? [1, 1, 1] : [2, 2, 2]}
        justifyContent="center"
        spacing={7}
        w="65%"
        m="3em auto 0 auto"
        h="20em"
      >
        <AnimatePresence exitBeforeEnter>
          {showCards && [1, 2, 3, 4].map((i, k) => (
            <motion.div
              initial={{ opacity: 0 }}
              exit={{ y: [0, -20], opacity: [1, 0] }}
              animate={{ y: [-20, 0], opacity: [0, 1] }}
              transition={{ delay: k * 0.15 }}
              key={'card-interests-' + _.uniqueId()}
            >
              <Cards
                size="sm"
                title="Save Money"
                desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </SimpleGrid>
    </Box>
  );
}
export default Interest;