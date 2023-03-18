import { Box } from "@chakra-ui/react";
import { Children } from "asset/types";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

function HoverText({ children }: Children) {
  return (
    <motion.div
      animate={{ x: [-120, 0], opacity: [0.4, 1] }}
      whileHover={{ opacity: 0.5 }}
    >
      {children ? children : ""}
    </motion.div>
  );
}

export default HoverText;
