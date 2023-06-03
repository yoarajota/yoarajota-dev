import { ScaleAnimation as ScaleAnimationType } from "asset/types";
import { motion } from "framer-motion";

function ScaleAnimation({ children, className = "", scale }: ScaleAnimationType) {
    return (
        <motion.div className={className} whileHover={{ scale }}>
            {children}
        </motion.div>
    );
};

export default ScaleAnimation;