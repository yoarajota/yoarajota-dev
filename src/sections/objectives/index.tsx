import { Box, SimpleGrid } from "@chakra-ui/react";
import Cards from "components/cards";
import { ClientContext } from "components/contexts/client";
import Titles from "components/typography/titles";
import _ from "lodash";
import { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { stateStorage } from "react-trigger-state";

function Objectives() {
  const { msg } = useContext(ClientContext);
  const [showCards, setShowCards] = useState<boolean>(false);
  const scrollYProgress = stateStorage.get("scrollYProgress");

  useEffect(() => {
    scrollYProgress.onChange((hookedYPosition: number) => {
      if ((hookedYPosition ?? 0) < 0.75) {
        setShowCards(false);
      } else if ((hookedYPosition ?? 0) > 0.75 && !showCards) {
        setShowCards(true);
      }
    });
  }, [scrollYProgress, showCards]);

  return (
    <Box w="100%" textAlign="center">
      <Box paddingTop="65px">
        <Titles text={msg?.objectives_title} />
      </Box>
      <Box>
        <SimpleGrid
          columns={[1, null, 3]}
          justifyContent="center"
          spacing={14}
          w="90%"
          m="0 auto"
          h="10em"
        >
          <AnimatePresence exitBeforeEnter>
            {showCards &&
              [1, 2, 3].map((i, k) => (
                <motion.div
                  exit={{ y: [0, -20], opacity: [1, 0] }}
                  animate={{ y: [-20, 0], opacity: [0, 1] }}
                  transition={{ delay: k * 0.15 }}
                  key={_.uniqueId()}
                >
                  <Cards
                    title="Save Money"
                    desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
                  />
                </motion.div>
              ))}
          </AnimatePresence>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
export default Objectives;
