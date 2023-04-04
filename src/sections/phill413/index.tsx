import { Box, Code } from "@chakra-ui/react";
import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";

function Phill413() {
    // const controls = useAnimation();
    // const ref = useRef(null)
    // const isInView = useInView(ref)
    // useEffect(() => {
    //     if (isInView) {
    //         controls.start({ y: 0 });
    //     }
    // }, [controls, isInView]);

    return (
        // <Box ref={ref} w='100%' display='flex' justifyContent='center' opacity="absolute">
        <Box w='100%' display='flex' justifyContent='center' opacity="absolute">
            {/* <motion.div initial={{ y: 40 }} transition={{delay: 1}} animate={controls}> */}
                <Code children='I can do all things in him that strengtheneth me.' />
            {/* </motion.div> */}
        </Box>
    )
}

export default Phill413;