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
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { Colors } from "asset/enums";
import Titles from "./typography/titles";
import NormalText from "./typography/normaltext";

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 300 : -300,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? -300 : 300,
            opacity: 0
        };
    }
};

const swipeConfidenceThreshold = 30;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

function InfinityBoxSlideCarousel({ list }: Carousel) {
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, list.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <Box textAlign='center' display='flex' justifyContent='center' alignItems='center' gap='20px'>
            <Box color={Colors.Orange} onClick={() => { paginate(1) }}>
                <BiUpArrow />
            </Box>
            <motion.div style={{ overflow: "hidden", width: '19em', justifyContent: 'center', display: 'flex' }}>
                <AnimatePresence exitBeforeEnter >
                    <motion.div
                        key={page}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ top: 0, bottom: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);
                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}

                    >
                        <Box
                            h='11em'
                            w='17em'
                            color="white"
                            padding='20px'
                            justifyContent='center'
                            borderRadius='14px'
                            border={`1px solid ${Colors.Purple}`}
                        >
                            <Box border={`1px solid ${Colors.Purple}`} borderLeft='none' borderRight='none' p='1% 0'>
                                <Titles size='esm'>
                                    {list[imageIndex]}
                                </Titles>
                            </Box>
                            <Box h='80%' p='0.5em' display='flex'>
                                <NormalText>
                                    {list[imageIndex]}
                                </NormalText>
                            </Box>
                        </Box>
                    </motion.div>
                </AnimatePresence>
            </motion.div>
            <Box color={Colors.Orange} onClick={() => { paginate(-1) }}>
                <BiDownArrow />
            </Box>
        </Box>
    );
}

export default InfinityBoxSlideCarousel;
