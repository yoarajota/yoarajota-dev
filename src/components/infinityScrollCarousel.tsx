import { Box, List, ListItem } from "@chakra-ui/react";
import { Carousel, keyable } from "asset/types";
import { useScroll } from "framer-motion";
import _ from "lodash";
import React, { ReactNode, SetStateAction, useEffect, useReducer, useRef, useState } from "react";

const USER = 1
const SYSTEM  = 2

function InfinityScrollCarousel({ list }: Carousel) {
    const [scroll, dispatch] = useReducer(
      (prev: keyable, next: keyable) => ({ ...prev, ...next }),
      { scroll_number: 0, call: USER }
    );
    const [state, setState] = useState<Array<string | ReactNode>>()
    const [scrollNumber, setScrollNumber] = useState<number>(0)
    useEffect(() => { setState(list) }, [list])
    const boxScroll = useRef<HTMLDivElement>(null);
    const { scrollYProgress, scrollY } = useScroll({
        container: boxScroll,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
      scrollY.onChange((v) => {
        if (scroll.call === "system") {

        }
        setScrollNumber((prev) => {
          boxScroll.current?.scrollTo(0, scroll.scroll_number + 10);
          return v;
        });
        if (
          Number(((boxScroll.current?.offsetHeight ?? 0) / v).toFixed(1)) <= 0.8
        ) {
          setState((prev): any => {
            let clone = _.clone(prev);
            let first = clone?.shift();
            clone?.push(first);
            return clone;
          });
        }
      });
    }, [scrollY]);

    return (
      <Box ref={boxScroll} h="100px" overflowY="scroll" w="fit-content">
        <List spacing={3}>
          {state?.map((i: string | ReactNode, index: number) => (
            <ListItem key={"scroll" + _.uniqueId()}>{i}</ListItem>
          ))}
        </List>
      </Box>
    );
}

export default InfinityScrollCarousel;

