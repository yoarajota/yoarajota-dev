import { Box, List, ListItem } from "@chakra-ui/react";
import { Carousel, keyable } from "asset/types";
import { useScroll } from "framer-motion";
import _ from "lodash";
import React, {
  ReactNode,
  useRef,
} from "react";

const USER = 1;
const SYSTEM = 2;

function InfinityScrollCarousel({ list }: Carousel) {
  const boxScroll = useRef<HTMLDivElement>(null);

  return (
    <Box ref={boxScroll} h="100px" overflowY="scroll" w="fit-content">
      <List spacing={3}>
        {list?.map((i: string | ReactNode, index: number) => (
          <ListItem key={"scroll" + _.uniqueId()}>{i}</ListItem>
        ))}
      </List>
    </Box>
  );
}

export default InfinityScrollCarousel;
