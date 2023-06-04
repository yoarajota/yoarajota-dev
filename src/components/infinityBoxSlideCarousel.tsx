import { Box, Tooltip } from "@chakra-ui/react";
import { CarouselBox, keyable } from "asset/types";
import { AnimatePresence } from "framer-motion";
import _ from "lodash";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { wrap } from "popmotion";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { HiAcademicCap } from "react-icons/hi";
import { Colors } from "asset/enums";
import NormalText from "./typography/normaltext";
import Titles from "./typography/titles";

function InfinityBoxSlideCarousel({ list }: CarouselBox) {
  const [page, setPage] = useState(0);
  const imageIndex = wrap(0, list.length, page);
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
        x: 0,
        opacity: 1,
      },
      exit: (index: number) => {
        return {
          x: newDirection < 0 ? 269 : -269,
          scale: index === newDirection ? 1 : 0.9,
        };
      },
      exit2: () => {
        return {
          x: newDirection < 0 ? 269 : -269,
          scale: 0.9,
        };
      },
      exit3: () => {
        return {
          x: newDirection < 0 ? 269 : -269,
        };
      },
    });
    setTimeout(() => {
      setPage(page + newDirection);
    }, 10);

    setTimeout(() => {
      setLoading(false);
    }, 600);
  };

  return (
    <Box
      textAlign="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="20px"
    >
      <Box
        color={Colors.Orange}
        onClick={() => {
          paginate(1);
        }}
      >
        <BiLeftArrow />
      </Box>
      <Box
        overflow="hidden"
        width="50em"
        justifyContent="center"
        display="flex"
      >
        <AnimatePresence exitBeforeEnter>
          <motion.div key={page + "boxes"}>
            <Box className="flex wrap-box-carousel">
              {[-2, -1, 0, 1, 2].map((index) => (
                <motion.div
                  key={`k-${index}`}
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                  }}
                  variants={variant}
                  custom={index}
                  animate="center"
                  exit={
                    [-2, 2].includes(index)
                      ? "exit3"
                      : [-1, 1].includes(index)
                      ? "exit"
                      : "exit2"
                  }
                  style={index === 0 ? {} : { scale: 0.9 }}
                >
                  <Box
                    onClick={
                      [-1, 1].includes(index)
                        ? () => {
                            paginate(index);
                          }
                        : () => {}
                    }
                    h="11em"
                    w="17em"
                    color="white"
                    padding="20px"
                    justifyContent="center"
                    borderRadius="14px"
                    border={`1px solid ${Colors.Purple}`}
                  >
                    <Box
                      border={`1px solid ${Colors.Purple}`}
                      borderLeft="none"
                      borderRight="none"
                      p="1% 0"
                    >
                      <Titles
                        size="esm"
                        text={String(
                          list
                            ? list[imageIndex + index]
                              ? list[imageIndex + index]?.title
                              : list[
                                  (list.length + index + imageIndex) %
                                    list.length
                                ]?.title
                            : ""
                        )}
                      />
                    </Box>
                    <Box
                      h="80%"
                      p="0.5em"
                      display="flex"
                      flexDirection="column"
                      gap="0.2em"
                    >
                      {list && (
                        <>
                          <Tooltip
                            label={
                              list[imageIndex + index]
                                ? list[imageIndex + index].inst
                                : list[
                                    (list.length + index + imageIndex) %
                                      list.length
                                  ].inst
                            }
                          >
                            <Box m="0 auto">
                              <HiAcademicCap size="1.3em" color={Colors.Gray} />
                            </Box>
                          </Tooltip>
                          <NormalText
                            text={String(
                              list[imageIndex + index]
                                ? list[imageIndex + index].text
                                : list[
                                    (list.length + index + imageIndex) %
                                      list.length
                                  ].text
                            )}
                          />
                        </>
                      )}
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </AnimatePresence>
      </Box>
      <Box
        color={Colors.Orange}
        onClick={() => {
          paginate(-1);
        }}
      >
        <BiRightArrow />
      </Box>
    </Box>
  );
}

export default InfinityBoxSlideCarousel;