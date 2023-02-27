import { Box, List, ListIcon, ListItem } from "@chakra-ui/react";
import { Carousel } from "asset/types";
import { useScroll } from "framer-motion";
import _ from "lodash";
import React, { ReactNode, SetStateAction, useEffect, useRef, useState } from "react";

function InfinityScrollCarousel({ list }: Carousel) {
    const [state, setState] = useState<Array<string | ReactNode>>()
    useEffect(() => { setState(list) }, [list])
    const boxScroll = useRef<HTMLDivElement>(null);
    const { scrollYProgress, scrollY } = useScroll({
        container: boxScroll,
        offset: ["start start", "end end"],
    });
    useEffect(() => {
        scrollY.onChange((v) => {
            console.log(Number(((boxScroll.current?.offsetHeight ?? 0) / v).toFixed(1)))
            if (Number(((boxScroll.current?.offsetHeight ?? 0) / v).toFixed(1)) <= 0.8) {
                setState((prev): any => {
                    let clone = _.clone(prev)
                    let first = clone?.shift();
                    clone?.push(first)
                    return clone;

                })

                console.log('oi')

                boxScroll.current?.scrollTo(0, 0);
            }
        });
    }, [scrollY]);

    return (
        <Box ref={boxScroll} h="100px" overflowY='scroll' w='fit-content'>
            <List spacing={3}>
                {state?.map((i: string | ReactNode) => (
                    <ListItem>
                        {i}
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default InfinityScrollCarousel;

