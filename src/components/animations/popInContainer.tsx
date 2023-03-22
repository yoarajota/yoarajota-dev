import { DefaultAnimatedContainerType } from "asset/types";
import { createArrayPopInContainer } from "components/helpers";
import { useTransform, motion } from "framer-motion";
import { useMemo } from "react";

function PopInContainer({ classes, motioned, children, end }: DefaultAnimatedContainerType) {
    const { pixels, motionValueArray } = useMemo(
        () => createArrayPopInContainer(end, 200),
        [end]
    );
    const y = useTransform(motioned, motionValueArray, pixels);

    return <motion.div className={classes} style={{ y }}>{children}</motion.div>;
}

export default PopInContainer;
