import {
  Box,
  Tooltip
} from "@chakra-ui/react";


import { Colors } from "asset/enums";
import { keyable, Timeline } from "asset/types";
import _ from "lodash";
import { useCallback } from "react";
import TimeLinePoints from "./animations/timelinePoints";

function Timeline({ data, setInfo, scrollYProgress }: Timeline) {
  const handleInfo = useCallback((val:keyable) => {
    setInfo((p: Array<any>) => {
      if (_.isEqual(p, val)) return {};
      return val;
    });
  }, [setInfo]);

  return (
    <Box
      h="20px"
      overflow="hidden"
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

      {data?.map((item, index) => {
        return (
          <TimeLinePoints index={index} key={index} scrollYProgress={scrollYProgress} sWidth={item.progress}>
            <Tooltip hasArrow label={`${item.level}  - ${item.popover_text}`} bg={Colors.Black} color={Colors.Gray}>
              <Box
                onClick={() => {
                  handleInfo(item);
                }}
                cursor="pointer"
                w="20px"
                h="20px"
                overflow='hidden'
                minWidth="20px"
                border={`2px solid ${Colors.Black}`}
                borderRadius="360px"
                backgroundColor={Colors.Orange}
                transform="scale(1, 1)"
                _hover={{
                  transform: "scale(1.3, 1.3)",
                }}
              />
            </Tooltip>
          </TimeLinePoints>
        );
      })}
    </Box>
  );
}

export default Timeline;
