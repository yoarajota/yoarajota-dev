import { Box, List, ListItem } from "@chakra-ui/react";
import { Carousel, keyable } from "asset/types";
import {
  animate,
  AnimatePresence,
  useAnimationControls,
  useScroll,
} from "framer-motion";
import _ from "lodash";
import React, { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { wrap } from "popmotion";
import { dir } from "console";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { Colors } from "asset/enums";
import NormalText from "./typography/normaltext";

const TRANSITION = {
  duration: 0.1,
  y: { type: "spring", stiffness: 300, damping: 30 },
};

const swipeConfidenceThreshold = 30;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

function InfinitySlideCarousel({ list }: Carousel) {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, list?.length ?? 0, page);
  const [variant, setVariant] = useState<keyable>({})
  const [loading, setLoading] = useState<boolean>(false)

  const paginate = (newDirection: number) => {
    if (loading) {
      return;
    }
    setLoading(true)
    
    setVariant({
      center: {
        zIndex: 1,
        y: 0,
        opacity: 1,
      },
      exit: () => {
        return {
          y: newDirection < 0 ? 33 : -33,
          scale: 1,
        };
      },
      exit2: () => {
        return {
          y: newDirection < 0 ? 33 : -33,
          scale: 0.9,
        };
      },
      exit3: () => {
        return {
          y: newDirection < 0 ? 33 : -33,
        };
      },
    });
    setTimeout(() => {
      setPage([page + newDirection, newDirection]);
    }, 10)

    setTimeout(() => {
      setLoading(false)
    }, 400)
  };

  return (
    <Box
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      w="100%"
    >
      <Box
        color={Colors.Orange}
        onClick={() => {
          paginate(1);
        }}
      >
        <BiUpArrow />
      </Box>
      <motion.div
        className="box-carousel-wrap"
      >
        <AnimatePresence exitBeforeEnter>
          <motion.div key={page}>
            <Box
              height="fit-content"
              color="white"
              display='flex'
              flexDirection='column'
              margin='-2em'
              w="fit-content"
            >
              {[-2, -1, 0, 1, 2].map((index) => (
                <motion.div
                  key={`k-${index}`}
                  transition={TRANSITION}
                  variants={variant}
                  animate="center"
                  exit={[-2, 2].includes(index) ? "exit3" : [-1].includes(index) ? "exit" : "exit2"}
                  className="box-carousel"
                  style={index === 0 ? {} : { scale: 0.9 }}
                  >
                  <NormalText>
                    {list &&
                      (list[imageIndex + index]
                        ? list[imageIndex + index]
                        : list[
                        (list.length + index + imageIndex) % list.length
                        ])}
                  </NormalText>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <Box
        color={Colors.Orange}
        onClick={() => {
          paginate(-1);
        }}
      >
        <BiDownArrow />
      </Box>
    </Box>
  );
}

export default InfinitySlideCarousel;
