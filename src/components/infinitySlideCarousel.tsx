import { Box } from "@chakra-ui/react";
import { Carousel, keyable } from "asset/types";
import {
  AnimatePresence,
} from "framer-motion";
import _ from "lodash";
import React, {
  useState,
} from "react";
import { motion } from "framer-motion";
import { wrap } from "popmotion";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { Colors } from "asset/enums";
import NormalText from "./typography/normaltext";

const TRANSITION = {
  duration: 0.1,
  y: { type: "spring", stiffness: 300, damping: 30 },
};

function InfinitySlideCarousel({ list }: Carousel) {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, list?.length ?? 0, page);
  const [variant, setVariant] = useState<keyable>({});
  const [loading, setLoading] = useState<boolean>(false);

  const paginate = (newDirection: number) => {
    if (loading) {
      return;
    }
    setLoading(true);

    setVariant({
      center: {
        zIndex: 1,
        y: 0,
        opacity: 1,
      },
      exit: (index: number) => {
        return {
          y: newDirection < 0 ? 33 : -33,
          scale: index === newDirection ? 1 : 0.9,
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
    }, 10);

    setTimeout(() => {
      setLoading(false);
    }, 400);
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
      <motion.div className="box-carousel-wrap">
        <AnimatePresence exitBeforeEnter>
          <motion.div key={page}>
            <Box
              height="fit-content"
              color="white"
              display="flex"
              flexDirection="column"
              margin="-2em"
              w="fit-content"
            >
              {[-2, -1, 0, 1, 2].map((index) => (
                <motion.div
                  key={`k-${index}`}
                  transition={TRANSITION}
                  variants={variant}
                  animate="center"
                  custom={index}
                  exit={
                    [-2, 2].includes(index)
                      ? "exit3"
                      : [-1, 1].includes(index)
                        ? "exit"
                        : "exit2"
                  }
                  className="box-carousel"
                  style={index === 0 ? {} : { scale: 0.9 }}
                  onClick={
                    [-1, 1].includes(index)
                      ? () => {
                        paginate(index);
                      }
                      : () => { }
                  }
                >
                  {list && (
                    <NormalText
                      text={String(
                        list[imageIndex + index]
                          ? list[imageIndex + index]
                          : list[
                          (list.length + index + imageIndex) % list.length
                          ]
                      )}
                    />
                  )}
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
