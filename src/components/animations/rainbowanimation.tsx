import { motion } from "framer-motion";
import { Colors, RainbowAnimation } from "../../asset/types";

function RainbowAnimation({ otherColor, children }: RainbowAnimation) {
    return (
        <motion.div
            animate={{
                color: [otherColor ?? Colors.Orange, Colors.DarkPurple, otherColor ?? Colors.Orange],
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
