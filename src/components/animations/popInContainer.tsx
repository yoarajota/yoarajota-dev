import { DefaultAnimatedContainerType } from "asset/types";
import { ClientContext } from "components/contexts/client";
import { createArrayPopInContainer } from "helpers/helpers";
import { useTransform, motion } from "framer-motion";
import { useContext, useMemo } from "react";

function PopInContainer({ classes, motioned, children, end }: DefaultAnimatedContainerType) {
    const { pixels, motionValueArray } = useMemo(
        () => createArrayPopInContainer(end, 200),
        [end]
    );
    const y = useTransform(motioned, motionValueArray, pixels);

    return <motion.div className={classes} style={{ y }}>{children}</motion.div>;
}

export default PopInContainer;
