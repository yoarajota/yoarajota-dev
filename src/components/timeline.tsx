import {
  Box,
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";


import { Colors } from "asset/enums";
import { Timeline } from "asset/types";
import TimeLinePoints from "./animations/timelinePoints";
import {
  PopoverTrigger as OrigPopoverTrigger
} from '@chakra-ui/react'

export const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger

function Timeline({ data, setInfo }: Timeline) {
  return (
    <Box
      h="20px"
      width="80%"
      margin="120px auto 0 auto"
      alignItems="center"
      display="flex"
      position="relative"
    >
      <Box
        id="timeline-bar"
        h="5px"
        width="100%"
        backgroundColor={Colors.Gray}
        borderRadius="360px"
        position="absolute"
      ></Box>

      {data?.map((item) => {
        console.log(item)

        return (
          <TimeLinePoints width={item.progress}>
            <Popover trigger="hover">
              <PopoverTrigger>
                <Box
                  onClick={() => {
                    setInfo(item);
                  }}
                  cursor="pointer"
                  w="20px"
                  h="20px"
                  border={`2px solid ${Colors.Black}`}
                  borderRadius="360px"
                  backgroundColor={Colors.Orange}
                  transform="scale(1, 1)"
                  _hover={{
                    transform: "scale(1.3, 1.3)",
                  }}
                />
              </PopoverTrigger>
              <PopoverContent bg="0D0D0D" color="white">
                <PopoverHeader fontWeight="semibold">
                  {item.level}
                </PopoverHeader>
                <PopoverArrow bg="0D0D0D" />
                <PopoverBody>{item.popover_text}</PopoverBody>
              </PopoverContent>
            </Popover>
          </TimeLinePoints>
        );
      })}
    </Box>
  );
}

export default Timeline;
