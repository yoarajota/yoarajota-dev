import { Box } from "@chakra-ui/react";
import { Children, FadeFromTop } from "asset/types";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

function FadeInFromTop({ children, delay = 0, keyProp }: FadeFromTop) {
    return (
        <motion.div
            key={keyProp}
            initial={{ opacity: 0, y: 0 }}
            exit={{ y: [0, -20], opacity: [1, 0] }}
            animate={{ y: [-20, 0], opacity: [0, 1] }}
            transition={{ delay }}
        >
            {children}
        </motion.div>
    );
}

export default FadeInFromTop;
