import { Box, List, ListItem } from "@chakra-ui/react";
import { Carousel, keyable } from "asset/types";
import {
  animate,
  AnimatePresence,
  useAnimationControls,
  useScroll,
} from "framer-motion";
import _ from "lodash";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { wrap } from "popmotion";
import { dir } from "console";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { Colors } from "asset/enums";
import NormalText from "./typography/normaltext";

const variants = {
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      y: direction < 0 ? 25 : -25,
      scale: 1,
    };
  },
  exit2: (direction: number) => {
    return {
      y: direction < 0 ? 25 : -25,
      scale: 0.9,
    };
  },
};

const TRANSITION = {
  duration: 0.1,
  y: { type: "spring", stiffness: 300, damping: 30 },
  opacity: { duration: 0.2 },
};

const swipeConfidenceThreshold = 30;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

function InfinitySlideCarousel({ list }: Carousel) {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, list?.length ?? 0, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <Box
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
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
        style={{ height: "6em", overflow: "hidden", display: "flex", justifyItems: 'center'}}
      >
        <AnimatePresence exitBeforeEnter>
          <motion.div key={page}>
            <Box
              height="fit-content"
              color="white"
              display='flex'
            >
              {[-2, -1, 0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  transition={TRANSITION}
                  custom={direction}
                  variants={variants}
                  animate="center"
                  exit={index === 0 ? "exit2" : "exit"}
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
