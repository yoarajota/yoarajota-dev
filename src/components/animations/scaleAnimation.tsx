import { ScaleAnimation as ScaleAnimationType } from "asset/types";
import { motion } from "framer-motion";

function ScaleAnimation({ functions, children, className = "", scale, duration = 0.25 }: ScaleAnimationType) {
    return (
      <motion.div
        {...functions}
        className={className}
        transition={{ duration }}
        whileHover={{ scale }}
      >
        {children}
      </motion.div>
    );
};

export default ScaleAnimation;