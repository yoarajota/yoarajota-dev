import { Box, List, ListItem } from "@chakra-ui/react";
import { Carousel, keyable } from "asset/types";
import { animate, AnimatePresence, useAnimationControls, useScroll } from "framer-motion";
import _ from "lodash";
import React, {
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
import { wrap } from "popmotion";

const variants = {
  enter: (direction: number) => {
    return {
      y: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      y: direction < 0 ? -1000 : 1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 20;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

function InfinityScrollCarousel({ list }: Carousel) {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, list.length, page);

  const paginate = (newDirection: number) => {
    console.log(newDirection)
    setPage([page + newDirection, newDirection]);
  };

  return (
    <motion.div style={{ height: '100px', overflow: "hidden" }}>
      <motion.div
        style={{ height: '50px' }}
        key={page}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          y: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 }
        }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.y, velocity.y);

          if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
          }
        }}

      >
        <Box
          alignItems="center"
          display='flex'
          height='100px'
          color="white"
        >{list[imageIndex]}</Box>
      </motion.div>
    </motion.div>
  );
}

export default InfinityScrollCarousel;
