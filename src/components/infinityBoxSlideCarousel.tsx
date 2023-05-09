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
import { BiDownArrow, BiLeftArrow, BiRightArrow, BiUpArrow } from "react-icons/bi";
import { Colors } from "asset/enums";
import Titles from "./typography/titles";
import NormalText from "./typography/normaltext";

// const variants = {
//     enter: (direction: number) => {
//         return {
//             x: direction > 0 ? 300 : -300,
//             opacity: 0
//         };
//     },
//     center: {
//         zIndex: 1,
//         x: 0,
//         opacity: 1
//     },
//     exit: (direction: number) => {
//         return {
//             zIndex: 0,
//             x: direction < 0 ? -300 : 300,
//             opacity: 0
//         };
//     }
// };

const swipeConfidenceThreshold = 30;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

function InfinityBoxSlideCarousel({ list }: Carousel) {
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, list.length, page);
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
            setPage([page + newDirection, newDirection]);
        }, 10)

        setTimeout(() => {
            setLoading(false)
        }, 600)
    };

    return (
        <Box textAlign='center' display='flex' justifyContent='center' alignItems='center' gap='20px'>
            <Box color={Colors.Orange} onClick={() => { paginate(1) }}>
                <BiLeftArrow />
            </Box>
            <Box overflow="hidden" width='50em' justifyContent='center' display='flex'>
                <AnimatePresence exitBeforeEnter>
                    <motion.div
                        key={page + "boxes"}
                    >
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
                                    exit={[-2, 2].includes(index) ? "exit3" : [-1, 1].includes(index) ? "exit" : "exit2"}
                                    style={index === 0 ? {} : { scale: 0.9 }}
                                >
                                    <Box
                                        onClick={[-1, 1].includes(index) ? (() => { paginate(index) }) : () => { }}
                                        h='11em'
                                        w='17em'
                                        color="white"
                                        padding='20px'
                                        justifyContent='center'
                                        borderRadius='14px'
                                        border={`1px solid ${Colors.Purple}`}
                                    >
                                        <Box border={`1px solid ${Colors.Purple}`} borderLeft='none' borderRight='none' p='1% 0'>
                                            {/* <Titles size='esm'> */}
                                                {list &&
                                                    (list[imageIndex + index]
                                                        ? list[imageIndex + index]
                                                        : list[
                                                        (list.length + index + imageIndex) % list.length
                                                        ])}
                                            {/* </Titles> */}
                                        </Box>
                                        <Box h='80%' p='0.5em' display='flex'>
                                                {list &&
                                            <NormalText text={String(list[imageIndex + index] ? list[imageIndex + index] : list[(list.length + index + imageIndex) % list.length])} />}
                                        </Box>
                                    </Box>
                                </motion.div>
                            ))}
                        </Box>
                    </motion.div>
                </AnimatePresence>
            </Box>
            <Box color={Colors.Orange} onClick={() => { paginate(-1) }}>
                <BiRightArrow />
            </Box>
        </Box>
    );
}

export default InfinityBoxSlideCarousel;
