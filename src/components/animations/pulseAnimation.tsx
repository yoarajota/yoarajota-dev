import { Colors } from "asset/enums";
import { motion } from "framer-motion";
import { Children } from "../../asset/types";

function PulseAnimation({ children }: Children) {
  return (
    <motion.div
      animate={{
        x: [6, 16, 6],
        color: [ Colors.Orange, Colors.Black, Colors.Orange ],
      }}
      transition={{ 
        repeat: Infinity, 
        duration: 2 }}
    >
      {children}
    </motion.div>
  );
}

export default PulseAnimation;
