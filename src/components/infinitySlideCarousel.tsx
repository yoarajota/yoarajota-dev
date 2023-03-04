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
import { dir } from "console";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { Colors } from "asset/enums";

const variants = {
    enter: (direction: number) => {
        return {
            y: direction > 0 ? 300 : -300,
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
            y: direction < 0 ? -300 : 300,
            opacity: 0
        };
    }
};

const swipeConfidenceThreshold = 30;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

function InfinitySlideCarousel({ list }: Carousel) {
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, list.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <Box textAlign='center' display='flex' flexDirection='column' alignItems='center'>
            <Box color={Colors.Orange} onClick={() => { paginate(1) }}>
                <BiUpArrow />
            </Box>
            <motion.div style={{ height: '40px', overflow: "hidden" }}>
                <AnimatePresence exitBeforeEnter >
                    <motion.div
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
                            height='40px'
                            color="white"
                        >{list[imageIndex]}</Box>
                    </motion.div>
                </AnimatePresence>
            </motion.div>
            <Box color={Colors.Orange} onClick={() => { paginate(-1) }}>
                <BiDownArrow />
            </Box>
        </Box>
    );
}

export default InfinitySlideCarousel;