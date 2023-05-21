import { Box, Tooltip } from "@chakra-ui/react";

import { Colors } from "asset/enums";
import { keyable, Timeline } from "asset/types";
import _ from "lodash";
import { useCallback } from "react";
import TimeLinePoints from "./animations/timelinePoints";
import { useTriggerState } from "react-trigger-state";

function Timeline({ data, setInfo, info }: Timeline) {
  const [scrollYProgress, x] = useTriggerState({
    name: "scrollYProgress",
  });

  const handleInfo = useCallback(
    (val: keyable) => {
      setInfo((p: Array<any>) => {
        if (_.isEqual(p, val)) return {};
        return val;
      });
    },
    [setInfo]
  );

  return (
    <Box
      h="20px"
      overflow="hidden"
      width="80%"
      margin="120px auto 0 auto"
      alignItems="center"
      display="flex"
      position="relative"
      padding="20px 0"
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
          <TimeLinePoints
            index={index}
            key={_.uniqueId()}
            scrollYProgress={scrollYProgress}
            sWidth={item.progress}
          >
            <Tooltip
              hasArrow
              label={`${item.level}  - ${item.popover_text}`}
              bg={Colors.Black}
              color={Colors.Gray}
            >
              <Box
                onClick={() => {
                  handleInfo(item);
                }}
                cursor="pointer"
                w="20px"
                h="20px"
                overflow="hidden"
                minWidth="20px"
                border={`2px solid ${Colors.Black}`}
                borderRadius="360px"
                backgroundColor={Colors.Orange}
                transform={
                  info.id === item.id ? "scale(1.3, 1.3)" : "scale(1, 1)"
                }
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
