import { FromRightPopup } from "asset/types";
import { motion } from "framer-motion";
import _ from "lodash";
import React from "react";

function FromRightPopupAnimation({ children, className, key }: FromRightPopup) {
    return (
        <motion.div
            key={key ?? _.uniqueId("from-right-popup-animation-")}
            animate={{ x: [40, 0], opacity: [0, 1] }} transition={{ delay: 0.5, transition: 'spring' }} initial={{ x: 40, opacity: 0 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default FromRightPopupAnimation;
