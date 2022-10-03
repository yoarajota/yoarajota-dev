import { motion } from "framer-motion";

function RainbowAnimation({ position, howFar, delay, children }) {
    return (
        <motion.div
            animate={{
                color: ["#D99E6A", "#0d0d0d", "#D99E6A"],
            }}
            transition={{
                repeat: Infinity,
                duration: 2
            }}
        >
            {children}
        </motion.div>
    );
}

export default RainbowAnimation;
