import { motion } from "framer-motion";
import { useEffect } from "react";

function SlideFromLeft({ delay, children }) {

    return (
        <motion.div animate={{
            x: [-400, 0]
        }}
            transition={{
                duration: delay ?? 1,
                type: "tween",
                stiffness: 100
            }}
        >   
            {children}
        </motion.div>
    );
}

export default SlideFromLeft;