import { motion } from "framer-motion";

function RainbowAnimation({ otherColor, children }) {
    return (
        <motion.div
            animate={{
                color: [otherColor ?? "#D99E6A", "#1a202c", otherColor ?? "#D99E6A"],
            }}
            transition={{
                repeat: Infinity,
                duration: 1,
            }}
        >
            {children}
        </motion.div>
    );
}

export default RainbowAnimation;
